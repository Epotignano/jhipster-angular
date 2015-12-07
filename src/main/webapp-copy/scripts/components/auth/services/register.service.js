'use strict';

angular.module('coursesApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


