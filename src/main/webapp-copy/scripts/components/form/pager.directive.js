/* globals $ */
'use strict';

angular.module('coursesApp')
    .directive('coursesAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
