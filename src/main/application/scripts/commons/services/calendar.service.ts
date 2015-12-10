/**
 * Created by mmasuyama on 11/28/2015.
 */



module app.services {
  import Course = app.domain.Course;
  interface ICalendarService {
    getCollection():void;
    setCollectionKey(params) : void;
    get(courseId);
    create(courseObj);
    update(courseObj, courseId);
    remove(courseId);
  }

  export class CalendarService implements ICalendarService {
    private collectionKey:string;
    private thread:Rx.Subject<{}>;
    public filteredCollection;
    private calendarReference;
    
    /** @ngInject */
    constructor(private FirebaseCRUDFactory:app.services.FirebaseCRUD,
                private $firebaseArray:AngularFireArrayService,
                private dbFactory: Firebase,
                private threadsService:app.threads.Threads,
                private coursesService : app.services.CalendarService) {

      this.thread = new Rx.Subject<{}>();
      this.threadsService.setThread('Calendar', this.thread);

      this.removeProxy = () => {
        this.remove.apply(this, arguments)
      };

    }

    removeProxy:(studentId) => void;

    setCollectionKey(studentId) {
      this.collectionKey = "calendar/" + studentId
      this.calendarReference = this.dbFactory.child(this.collectionKey);
    }

    addEvent(event) {
      this.$firebaseArray(this.calendarReference).$add(event);
    }

    courseSubject(courseId) {
      var CourseSubject = new Rx.Subject<any>();

      this.FirebaseCRUDFactory.get(courseId, 'courses')
          .then((data) => {
              CourseSubject.onNext(data)
        })

      return CourseSubject;
    }

    getCollection() {
      this.FirebaseCRUDFactory.getCollection(this.collectionKey)
        .then((data)=> this.thread.onNext({data, 'EVENT': this.threadsService.defaultEvents['COLLECTION_LOADED']}))
        .catch((error)=> this.thread.onError({error, 'EVENT': this.threadsService.defaultEvents['COLLECTION_LOADED']}));
    }

    get(courseId) {
      this.FirebaseCRUDFactory.get(courseId, this.collectionKey)
        .then((data:any)=> this.thread.onNext({data, 'EVENT': this.threadsService.defaultEvents.OBJECT_LOAD}))
        .catch((error:any)=> this.thread.onError({error, 'EVENT': this.threadsService.defaultEvents.OBJECT_LOAD}));
    }

    create(courseObj) {
      this.FirebaseCRUDFactory.create(courseObj, this.collectionKey)
        .then((data)=> {
          console.log(data);
          this.thread.onNext({data, 'EVENT': this.threadsService.defaultEvents.OBJECT_CREATE})
        })
        .catch((error)=> this.thread.onError({error, 'EVENT': this.threadsService.defaultEvents.OBJECT_CREATE}));
    }

    update(courseObj, courseId) {
      this.FirebaseCRUDFactory.update(courseObj, courseId, this.collectionKey)
        .then((data)=> this.thread.onNext({data, 'EVENT': this.threadsService.defaultEvents.OBJECT_UPDATE}));
    }

    remove(courseId) {
      this.FirebaseCRUDFactory.remove(courseId, this.collectionKey)
        .then((data)=> this.thread.onNext({data, 'EVENT': this.threadsService.defaultEvents.OBJECT_DELETE}))
        .catch((error)=> this.thread.onError({error, type: 'deletion'}));
    }

  }

  angular.module('smz.services')
    .service('calendarService', CalendarService)

}
