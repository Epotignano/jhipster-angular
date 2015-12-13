/**
 * Created by mmasuyama on 11/6/2015.
 */

/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
/// <reference path="entities.list.ts" />
/// <reference path="entity.deletor.ts" />
/// <reference path="entities.filter.ts" />
/// <reference path="entities.editor.ts" />

module Onesnap.Components.Entities {
  angular.module('onesnap.components.entities', ['smart-table'])
    .directive('entityList', entityList)
    .directive('entityDeletor', entityDeletor);

}
