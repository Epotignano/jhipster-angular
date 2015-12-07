'use strict';

angular.module('coursesApp')
    .controller('StudentDetailController', function ($scope, $rootScope, $stateParams, entity, Student, Course) {
        $scope.student = entity;
        $scope.load = function (id) {
            Student.get({id: id}, function(result) {
                $scope.student = result;
            });
        };
        var unsubscribe = $rootScope.$on('coursesApp:studentUpdate', function(event, result) {
            $scope.student = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
