/**
 * Created by mmasuyama on 11/10/2015.
 */
/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
module Onesnap.Components.Entities {

  interface IEntityDeletionController {
    executeDeletion()
  }

  class EntityDeletionController {
    public collection;
    public ngModel;
    public deletionService; //service for delete element if there is an interaction with any api
    public options; // liveUpdate : boolean
    public compareBy;
    public showLabel;
    public modalOptions;
    public deletionOnSuccess;  //function that we should execute on success
    public deletionOnError;  //function that we should execute on error
    public deletionCallback;


    /** @ngInject */
    constructor(private $mdDialog, private $element, private $q) {

      this.$element.bind('click', () => {
          this.submitDeletion(this.collection, this.ngModel);
      });
    }

    executeDeletion = () => {

      if (Array.isArray(this.ngModel)) {

        var promisesArray = [];

        this.ngModel.forEach(function (modelElement) {
          var modelElementPromise = this.$q.defer();
          promisesArray.push(modelElementPromise.promise);
          this.deletionService(modelElement).then(this.deletionOnSuccess, this.deletionOnError);
        });

      } else {
        var _model = (this.options.compareBy) ? this.ngModel[this.options.compareBy] : this.ngModel;
        if (this.options.usePromise) {
            this.deletionService(_model);
        } else {
            this.deletionService(_model, this.deletionCallback);
        }
      }
    };

    submitDeletion(ev, entity) {
      if (this.deletionService) {
        if (this.options.askBeforeDelete) {
      this.$mdDialog.show({
        controller: DeletorDialogController,
        controllerAs: 'dialogVm',
        templateUrl: 'scripts/components/entities/entities.deletor.dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          'entity': entity,
          'showLabel': this.showLabel
        }
      }).then(() => {
        this.executeDeletion();
      });
        } else {
          this.executeDeletion();
        }
      }
    }

  }

  class DeletorDialogController {
    public section;
    /** @ngInject */
    constructor(private $mdDialog, private $translate, public entity, public showLabel) {}
    add(entity) {
      this.$mdDialog.hide(entity);
    }
    cancel() {
      this.$mdDialog.cancel();
    }
  }


  /** @ngInject */
  export function entityDeletor():ng.IDirective {

    var directive = <ng.IDirective> {
      scope: {
        collection: '=',
        ngModel: '=',
        showLabel: '=',
        deletionService: '=', //service for delete element if there is an interaction with any api
        options: '=', // liveUpdate : boolean
        modalOptions: '=',
        deletionOnSuccess: '=', //function that we should execute on success
        deletionOnError: '=', //function that we should execute on error
        deletionCallback: '=' //function that we should execute after deletion if the deletionService is not a proimise
      },
      controller: EntityDeletionController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

    
}
