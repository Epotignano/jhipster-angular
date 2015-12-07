'use strict';

angular.module('coursesApp')
    .controller('CourseDetailController', function ($scope, $rootScope, $stateParams, entity, Course, Teacher, Student) {
        $scope.course = entity;
        $scope.load = function (id) {
            Course.get({id: id}, function(result) {
                $scope.course = result;
            });
        };
        var unsubscribe = $rootScope.$on('coursesApp:courseUpdate', function(event, result) {
            $scope.course = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
