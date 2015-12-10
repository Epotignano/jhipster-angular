(function ()
{
    'use strict';

    angular.module('app.calendar')
        .controller('EventFormDialogController', EventFormDialogController);

    /** @ngInject */
    function EventFormDialogController($mdDialog, dialogData, studentCourses, $translate, calendarService)
    {
        var vm = this;

        vm.studentCourses = studentCourses;

        var _retrieveCourseBooks = function (courseId) {
            var _course;
            _.some(studentCourses, function(course){
                if (course.id == courseId) {
                    _course = course;
                    return ;
                };
            })
            
            return _course.books
        }

        var _retrieveBookSections = function (bookTitle) {
            var _book;

            _.some(vm.selectableBooks, function (book) {
                if (book.title == bookTitle) {
                    _book = book;
                    return;
                };
            })

            if(_book){
              return _book.sections
            }else{
              return [];
            }
        }

        
        vm.deleteEvent = function () {
            calendarService.remove(vm.calendarEvent.$id);
            vm.closeDialog();
        }

        vm.classFields = [
          {
            key: 'teacher',
            type: 'input',
            templateOptions : {
              type: 'text',
              label: $translate.instant('CALENDAR.TEACHER')
            }
          },

          {
            key: 'course',
            type: 'select',
            templateOptions: {
            selectProperty : 'id',
              collection: studentCourses,
              displayKey: 'name',
              type: 'number',
              label: $translate.instant('COMMONS.COURSES')
            }
          },

          {
            key: 'attendance',
            type: 'checkbox',
            templateOptions : {
              label: $translate.instant('CALENDAR.ATTENDANCE')
            }
          },

          {
            key: 'classNumber',
            type: 'input',
            templateOptions : {
              type: 'number',
              label: $translate.instant('CALENDAR.DAY_CLASS_NUMBER')
            }
          }
        ];

        vm.smallTestFields = [
          {
            key: 'smallTest',
            type: 'input',
            templateOptions : {
              type: 'text',
              label: $translate.instant('CALENDAR.SMALL_TEST')
            }
          }
        ];

        vm.homeworkFields = [
          {
            key: 'done',
            type: 'checkbox',
            templateOptions: {
              label: $translate.instant('CALENDAR.HOMEWORK_DONE')
            }
          },

          {
            key: 'nextHomework',
            type: 'input',
            templateOptions : {
              type: 'text',
              label: $translate.instant('CALENDAR.NEXT_HOMEWORK')
            }
          }
        ];


        vm.unityDescriptionFields = [{
            key: 'textBook',
            type: 'select',
            templateOptions : {
              collection: vm.selectableBooks || [],
              displayKey: 'title',
              label: $translate.instant('COMMONS.BOOKS')
            }
          }
        ];

        // Data
        vm.dialogData = dialogData;
        vm.notifications = ['15 minutes before', '30 minutes before', '1 hour before'];

        // Methods
        vm.saveEvent = saveEvent;
        vm.closeDialog = closeDialog;

        init();

        //////////

        /**
         * Initialize
         */
        function init()
        {
            // Edit
            if ( vm.dialogData.calendarEvent )
            {

                // if the entities to observe were not defined, we will initialize them as objects
                if (!vm.dialogData.calendarEvent.homework) vm.dialogData.calendarEvent.homework = {};
                if (!vm.dialogData.calendarEvent.nextHomework) vm.dialogData.calendarEvent.nextHomework = {};

                if (vm.dialogData.calendarEvent.course) vm.selectableBooks = _retrieveCourseBooks(vm.dialogData.calendarEvent.course);
                if (vm.dialogData.calendarEvent.homework.book) vm.homeworkSelectableSections = _retrieveBookSections(vm.dialogData.calendarEvent.homework.book);

                if (vm.dialogData.calendarEvent.nextHomework.book) vm.nextHomeworkSelectableSections = _retrieveBookSections(vm.dialogData.calendarEvent.nextHomework.book);

                //TODO Buscarle una solucion coherente;
                // delete vm.dialogData.calendarEvent.source;

                // Clone the calendarEvent object before doing anything
                // to make sure we are not going to brake the Full Calendar
                vm.calendarEvent = angular.copy(vm.dialogData.calendarEvent);
            }
            // Add
            else
            {
                // Convert moment.js dates to javascript date object

                if ( moment.isMoment(vm.dialogData.start) )
                {
                    vm.dialogData.start = vm.dialogData.start.toDate();
                }

                if ( moment.isMoment(vm.dialogData.end) )
                {
                    vm.dialogData.end = vm.dialogData.end.toDate();
                }

                vm.calendarEvent = {
                    start        : vm.dialogData.start,
                    end          : vm.dialogData.end,
                    course: {},
                    homework: {},
                    nextHomework: {},
                    allDay: true
                };
            }

            Object.observe(vm.calendarEvent, function (changes) {
                if (changes[0].name == "course") {
                    vm.selectableBooks = _retrieveCourseBooks(changes[0].object.course)
                }
            });

            Object.observe(vm.calendarEvent.homework, function (changes) {
                if (changes[0].name == "book") {
                    vm.homeworkSelectableSections = _retrieveBookSections(changes[0].object.book)
                }
            });

            Object.observe(vm.calendarEvent.nextHomework, function (changes) {
                if (changes[0].name == "book") {
                    vm.nextHomeworkSelectableSections = _retrieveBookSections(changes[0].object.book);
                }
            });

          
        }

        function saveEvent()
        {
            var response = {
                type         : vm.dialogData.type,
                calendarEvent: vm.calendarEvent
            };

            $mdDialog.hide(response);
        }

        /**
         * Close the dialog
         */
        function closeDialog()
        {
            $mdDialog.cancel();
        }
    }
})();
