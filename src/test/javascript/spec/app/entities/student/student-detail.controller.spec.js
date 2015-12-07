'use strict';

describe('Student Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockStudent, MockCourse;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockStudent = jasmine.createSpy('MockStudent');
        MockCourse = jasmine.createSpy('MockCourse');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Student': MockStudent,
            'Course': MockCourse
        };
        createController = function() {
            $injector.get('$controller')("StudentDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'coursesApp:studentUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
