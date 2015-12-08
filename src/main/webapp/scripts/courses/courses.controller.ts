/**
 * Created by mmasuyama on 11/5/2015.
*/
module app.modules.courses {

  interface ICoursesList {
  }

  export class CoursesListController implements ICoursesList {
    public thread;
    public list: app.domain.Course[];
    public coursesConf;
    private successFn;

    /** @ngInject */
    constructor(public coursesService: app.services.CoursesService,
                private threadsService: app.threads.Threads,
                private $translate) {

      this.successFn = (result) => {
        if (result.EVENT == this.threadsService.defaultEvents.OBJECT_DELETE) {
        }
        if (result.EVENT == this.threadsService.defaultEvents.COLLECTION_LOADED) {
          this.list = result.data;
        }
      }

      this.coursesService.getCollection();
      this.thread = this.threadsService.getThread('Course');
      this.thread.subscribe(this.successFn);

      // list configuration

      this.coursesConf = [
        {
          key: 'name',
          label: $translate.instant('COMMONS.FIRST_NAME'),
          sort: true
        }
      ];
    }

    showCourseLabel (course) {
      return course.name
    }

  }

  interface ICoursesEditor {
    save(studentObj)
  }

  export class CoursesEditorController implements ICoursesEditor {

    public course;
    public book;
    public formFields;
    private courseThread;
    private id;
    private successFn;

    /** @ngInject */
    constructor(public coursesService: app.services.CoursesService,
                public threadsService: app.threads.Threads,
                private $translate,
                private $state: ng.ui.IStateService,
                private $stateParams: ng.ui.IStateParamsService,
                private $mdDialog) {

      // data obtaining and save or update logic


        var _removeDuplicates = () => {
            if (this.course.books.length > 1) {
                this.course.books.forEach((book, index) => {
                    if (!book.$id) {
                        this.course.books.splice(index);
                    }
                })
            }
      };

      this.successFn = (result) => {
        if (result.EVENT === this.threadsService.defaultEvents.OBJECT_LOAD) {
          this.course = result.data;
          if (!result.data.books) {
            this.course.books = [];
          }
        }

        if(result.EVENT === this.threadsService.defaultEvents.OBJECT_UPDATE) {
          _removeDuplicates();
        }

        if (result.EVENT === this.threadsService.defaultEvents.OBJECT_CREATE) {
          $state.go('app.courses.list')
        }
    };

    this.courseThread = threadsService.getThread('Course');

      this.courseThread.subscribe(this.successFn);

      // initialization logic

      if ($stateParams['id']) {
        this.id = $stateParams['id'];
        this.coursesService.get($stateParams['id']);
      } else {
        this.course = {
          name: '',
          books: []
        };
      }
      // initialization end

      this.formFields = [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: this.$translate.instant('COMMONS.FIRST_NAME')
          }
        }
      ];
    }

    // methods

    save(studentObj) {
      var _studentObj = angular.copy(studentObj);
      if (this.id) {
        this.coursesService.update(_studentObj, this.id);
      } else {
        this.coursesService.create(_studentObj);
      }
    }

    removeBookFromCollection(book, books){
      var index = books.indexOf(book);
      books.splice(index, 1);
    }

    removeBook(book, courseId, books){
    var _bookForDelete;
      books.some((b) => {
        if (book.$id == b.$id) {
          _bookForDelete = b;
          return true;
        }
      })

      this.coursesService.removeBookCourse(_bookForDelete.$id, courseId);
    }

    showBookDialog(ev, book, index) {
      this.$mdDialog.show({
        controller: BookDialogController,
        controllerAs: 'dialogVm',
        templateUrl: 'app/courses/book.dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        locals : {
          book : angular.copy(book),
          editMode: !!index,
          originalBook : angular.copy(book)
        }
      }).then((response) => {
          if (response.editMode) {
              var _index 
              this.course.books.some((book, bookIndex) => {
                  if (book.title == response.originalBook.title) {
                      _index = bookIndex;
                      return true;
                  }
              })

              this.course.books[_index] = response.book;
          } else {
              this.course.books.push(response.book); 
          }
      });
    }
  }

  class BookDialogController {
    public section;
    public booksFormFields;
    public sectionFormFields;

    /** @ngInject */
    constructor(private $mdDialog, private $translate, public book, public editMode, public originalBook) {
      if (!this.book){
        this.book = {
          sections: []
        };
      }

      this.booksFormFields = [{
        key: 'title',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: this.$translate.instant('COURSES.BOOK_NAME')
        }
      },
        {
          key: 'description',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: this.$translate.instant('COURSES.DESCRIPTION')
          }
        }
      ];

      this.sectionFormFields = [{
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: this.$translate.instant('COURSES.SECTIONS_OF_BOOK')
        }
      }];
    }



    addSection(section) {
      this.book.sections.push(angular.copy(section));
      this.section = {};
    }

    add(book) {
        this.$mdDialog.hide({ book });
    }

    edit(book) {
        this.$mdDialog.hide({ book, editMode: true, originalBook: this.originalBook });
    }

    cancel() {
      this.$mdDialog.cancel();
    }
  }
}

