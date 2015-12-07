/**
 * Created by mmasuyama on 11/5/2015.
 */

module app.modules.students {

  interface IStudentsList {}

  export class StudentsListController implements IStudentsList{
    public thread;
    public list: app.domain.User[];
    public studentConf;
    public showStudentLabel;
    private successFn;

    /** @ngInject */
    constructor(public studentsService: app.services.StudentsService,
                private threadsService: app.threads.Threads,
                private $translate
    ) {

    this.successFn = (result) => {
      if (result.EVENT == this.threadsService.defaultEvents.OBJECT_DELETE) {

      }
      if (result.EVENT == this.threadsService.defaultEvents.COLLECTION_LOADED) {
        this.list = result.data;
      }
    }

    this.studentsService.getCollection();
    this.thread = this.threadsService.getThread('Student');
    this.thread.subscribe(this.successFn);
    // list configuration

    this.showStudentLabel = function(student) {
      return student.fullName;
    };

    this.studentConf = [
      {
        key: 'fullName',
        label: $translate.instant('COMMONS.FULL_NAME'),
        sort : true
      },
      {
        key: 'fullNameLecture',
        label: $translate.instant('COMMONS.FULL_NAME_LECTURE')
      }

    ];
    }
  }

  interface IStudentsEditor {
    save(studentObj)
  }

  export class StudentsEditorController implements IStudentsEditor {

  public student;
  public selectedCourses;
  public course;
  private studentThread;
  private id;
  private courseFormFields;
  public formFields;
  private successFn;

  /** @ngInject */
  constructor(public studentsService: app.services.StudentsService,
              public threadsService: app.threads.Threads,
              private $translate,
              private $state: ng.ui.IStateService,
              private $stateParams: ng.ui.IStateParamsService,
              public coursesList,
              private $mdDialog
  ) {

    // data obtaining and save or update logic

    this.successFn = (result) => {
      if (result.EVENT == this.threadsService.defaultEvents.OBJECT_LOAD) {
        this.student = result.data;
      }
      if (result.EVENT == this.threadsService.defaultEvents.OBJECT_CREATE) {
        $state.go('app.students.list')
      }
    };

    this.studentThread = threadsService.getThread('Student');

    this.studentThread.subscribe(this.successFn);

    if ($stateParams['id']) {
      this.id = $stateParams['id'];
      this.studentsService.get($stateParams['id']);
    } else {
      this.student = {
        role: 'student',
        courses: []
      };
    }


    this.courseFormFields = [{
      key: 'selectedCourse',
      type: 'autocomplete',
      templateOptions : {
        placeholder: this.$translate.instant('STUDENTS.ATTENDED_COURSES'),
        collection: this['coursesList'],
        labelKey: 'name',
        modelKey: '$id'
      }
    }];

   this.formFields = [{
       key: 'fullName',
       type: 'input',
       templateOptions: {
         type: 'text',
         label: this.$translate.instant('COMMONS.FULL_NAME')
       }
     },
     {
       key: 'fullNameLecture',
       type: 'input',
       templateOptions: {
         type: 'text',
         label: this.$translate.instant('COMMONS.FULL_NAME_LECTURE')
       }
     },

     {
       key : 'address',
       type: 'input',
       templateOptions : {
         type: 'text',
         label: this.$translate.instant('COMMONS.ADDRESS')
       }
     },

     {
       key : 'phoneNumber',
       type: 'input',
       templateOptions : {
         type: 'text',
         label: this.$translate.instant('COMMONS.PHONE_NUMBER')
       }
     },

     {
       key : 'email',
       type: 'input',
       templateOptions : {
         type: 'text',
         label: this.$translate.instant('COMMONS.EMAIL')
       }
     },
     {
       key: 'grade',
       type: 'input',
       templateOptions : {
         type: 'text',
         label: this.$translate.instant('COMMONS.GRADE')
       }
     },

     {
       key: 'actualSchool',
       type: 'input',
       templateOptions : {
         type: 'text',
         label: this.$translate.instant('STUDENTS.ACTUAL_SCHOOL')
       }
     },
     {
       key: 'desiredSchool',
       type: 'input',
       templateOptions : {
         type: 'text',
         label: this.$translate.instant('STUDENTS.DESIRED_SCHOOL')
       }
     },
     {
       key: 'branch',
       type: 'input',
       templateOptions : {
         type: 'text',
         label: this.$translate.instant('STUDENTS.BRANCH')
       }
     },

     {
       key : 'age',
       type: 'input',
       templateOptions: {
         type: 'number',
         label: this.$translate.instant('COMMONS.AGE')
       }
     }
   ];
  }

    // methods

    save(studentObj) {
      var _studentObj = angular.copy(studentObj);
      if (this.id) {
        this.studentsService.update(_studentObj, this.id);
      } else {
        this.studentsService.create(_studentObj);
      }
    }

    addCourse(course) {
      if(!this.student.courses) this.student.courses = [];
      this.student.courses.push({'id' : angular.copy(course['$id'])});
      this.course = {};
    }

    removeCourseFromCollection(course, courses){
      var index = courses.indexOf(course);
      courses.splice(index, 1);
    }

    removeCourse(course, studentId, courses){
      var _courseForDelete;
      courses.some((c)=> {
          if(course.id == c.id) {
            _courseForDelete = c;
            return true;
          }
      })

      this.studentsService.removeStudentCourse(studentId, _courseForDelete.$id);
    }

    showBookDialog(ev) {
      this.$mdDialog.show({
        locals: {
          coursesList: this.coursesList
        },
        controller: CoursesDialogController,
        controllerAs : 'dialogVm',
        templateUrl: 'app/students/courses.dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      }).then((selectedCourses) => {
        var _auxCoursesArray = angular.copy(this.student.courses) || [];
        selectedCourses.forEach((course) => _auxCoursesArray.push({'id': course.$id}));
        this.student.courses = _auxCoursesArray;
      });
    }
  }

  class CoursesDialogController {
    public course;
    public selectedCourses;
    public courseFormFields;
    /** @ngInject */
    constructor(private $mdDialog, private $translate, private coursesList) {
      this.selectedCourses = [];
      this.courseFormFields = [{
        key: 'selectedCourse',
        type: 'autocomplete',
        templateOptions : {
          placeholder: this.$translate.instant('STUDENTS.ATTENDED_COURSES'),
          collection: this['coursesList'],
          labelKey: 'name',
          modelKey: '$id'
        }
      }];
    }

    addCourse(course) {
      this.selectedCourses.push(angular.copy(course.selectedCourse));
      this.course = {};
    }

    add() {
      this.$mdDialog.hide(this.selectedCourses);
    }
    cancel() {
      this.$mdDialog.cancel();
    }
  }

}

