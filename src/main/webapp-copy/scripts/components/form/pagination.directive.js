/* globals $ */
'use strict';

angular.module('coursesApp')
    .directive('coursesAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
