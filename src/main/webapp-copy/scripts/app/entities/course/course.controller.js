'use strict';

angular.module('coursesApp')
    .controller('CourseController', function ($scope, $state, $modal, Course, ParseLinks) {
      
        $scope.courses = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Course.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.courses = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.course = {
                name: null,
                birthdate: null,
                id: null
            };
        };
    });
