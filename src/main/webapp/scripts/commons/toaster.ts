/**
 * Created by mmasuyama on 11/10/2015.
 */

/// <reference path="../../../.tmp/typings/tsd.d.ts" />

module app.threads {

  interface IToaster {
    showToaster(notification, type)
  }

  export class ToasterListener implements IToaster{
    private toasterThread;
    private arrayObserv;
    private threads;
    private observables;

    /** @ngInject */
    constructor(private threadsService : Threads, private $mdToast, private $translate) {
      this.toasterThread = new Rx.Subject<{}>();
      this.observables = [];
      this.threadsService.setGeneralListener(this.toasterThread);

      this.toasterThread.subscribe((observable) => {
        this.observables.push(observable);
        this.threads = Rx.Observable.merge(this.observables);
        this.threads.subscribe((notification) => {
          this.showToaster(notification, 'SUCCESS');
        })
      },(error)=> {
        this.showToaster(error, 'ERROR');
      });
    }

    showToaster(notification, type){
      switch(notification.EVENT){
        case(this.threadsService.defaultEvents['OBJECT_UPDATE']):
              this.$mdToast.showSimple(this.$translate.instant("COMMONS.UPDATE_" + type));
              break;
        case(this.threadsService.defaultEvents['OBJECT_CREATE']):
          this.$mdToast.showSimple(this.$translate.instant("COMMONS.SAVE_" + type));
          break;
        case(this.threadsService.defaultEvents['OBJECT_DELETE']):
          this.$mdToast.showSimple(this.$translate.instant("COMMONS.DELETE_" + type));
          break;
      }

    }
  }

  angular.module('smz.services')
    .service('toasterService', ToasterListener);
}
