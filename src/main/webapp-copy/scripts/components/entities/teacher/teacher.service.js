'use strict';

angular.module('coursesApp')
    .factory('Teacher', function ($resource, DateUtils) {
        return $resource('api/teachers/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.birtdhdate = DateUtils.convertLocaleDateFromServer(data.birtdhdate);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.birtdhdate = DateUtils.convertLocaleDateToServer(data.birtdhdate);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.birtdhdate = DateUtils.convertLocaleDateToServer(data.birtdhdate);
                    return angular.toJson(data);
                }
            }
        });
    });
