/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
module Onesnap.Components.Entities {

  interface IEntityEditorController {}


  export class EntityEditorController implements IEntityEditorController {

    /** @ngInject */ 
    constructor(){}

  }

  /** @ngInject */
  export function entityEditor():ng.IDirective {

    var directive = <ng.IDirective> {
      restrict: 'E',
      scope: {
        onSubmit: '=',
        onCancel: '=',
        formFields : '=',
        entity: '='
      },
      templateUrl: 'app/components/entities/entities.editor.html',
      controller: EntityEditorController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }


}




