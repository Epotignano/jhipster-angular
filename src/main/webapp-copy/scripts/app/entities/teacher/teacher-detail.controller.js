'use strict';

angular.module('coursesApp')
    .controller('TeacherDetailController', function ($scope, $rootScope, $stateParams, entity, Teacher) {
        $scope.teacher = entity;
        $scope.load = function (id) {
            Teacher.get({id: id}, function(result) {
                $scope.teacher = result;
            });
        };
        var unsubscribe = $rootScope.$on('coursesApp:teacherUpdate', function(event, result) {
            $scope.teacher = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
