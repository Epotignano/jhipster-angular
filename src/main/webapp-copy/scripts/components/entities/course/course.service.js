'use strict';

angular.module('coursesApp')
    .factory('Course', function ($resource, DateUtils) {
        return $resource('api/courses/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.birthdate = DateUtils.convertLocaleDateFromServer(data.birthdate);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.birthdate = DateUtils.convertLocaleDateToServer(data.birthdate);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.birthdate = DateUtils.convertLocaleDateToServer(data.birthdate);
                    return angular.toJson(data);
                }
            }
        });
    });
