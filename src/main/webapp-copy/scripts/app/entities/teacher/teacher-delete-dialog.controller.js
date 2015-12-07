'use strict';

angular.module('coursesApp')
	.controller('TeacherDeleteController', function($scope, $modalInstance, entity, Teacher) {

        $scope.teacher = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Teacher.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });