'use strict';

angular.module('coursesApp')
    .controller('TeacherController', function ($scope, $state, $modal, Teacher, ParseLinks) {
      
        $scope.teachers = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Teacher.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.teachers = result;
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
            $scope.teacher = {
                name: null,
                birtdhdate: null,
                id: null
            };
        };
    });
