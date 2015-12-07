'use strict';

angular.module('coursesApp')
    .controller('StudentController', function ($scope, $state, $modal, Student, ParseLinks) {
      
        $scope.students = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Student.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.students = result;
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
            $scope.student = {
                firstname: null,
                lastname: null,
                id: null
            };
        };
    });
