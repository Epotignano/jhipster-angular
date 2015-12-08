(function ()
{
    'use strict';

    angular
        .module('app.calendar')
        .controller('CalendarController', CalendarController);

    /** @ngInject */
    function CalendarController($mdDialog, $document,
                                uiCalendarConfig,
                                $stateParams,
                                studentsService,
                                calendarService,
                                threadsService,
                                handlebarsTemplates)
    {
        var vm = this;

        // moment().utc();
        //moment.tz("Asia/Tokyo");

        vm.events = [[]]
        
        console.log(uiCalendarConfig);

      var _calendarStream  = threadsService.getThread('Calendar');

      _calendarStream.subscribe(function (data) {
          
          if (data.EVENT == threadsService.defaultEvents.COLLECTION_LOADED) {
            data.data.forEach(function(events, index){
                events.start = moment.unix(events.start).toString();
                if(events.end){
                    events.end = moment.unix(events.end).toString();
                }
                data.data[index] = events;
            })
            vm.events[0] = data.data;
            uiCalendarConfig.calendars['eventsCalendar'].fullCalendar('refetchEvents');
        }

        if (data.EVENT == threadsService.defaultEvents.OBJECT_UPDATE || 
            data.EVENT == threadsService.defaultEvents.OBJECT_DELETE ) {
            calendarService.getCollection();
        }
        
        if(data.EVENT ==  threadsService.defaultEvents.OBJECT_CREATE) {
            calendarService.getCollection();
        }
      });

        vm.stateParams = $stateParams;

        // Data
        // var date = new Date();
        var date = moment.utc();
        var d = date.day();
        var m = date.month();
        var y = date.year();

        /*** FOR STUDENT DIARY **/
        function _obtainCurrentMonthEvents() {
            return _.sortBy(_.map(_.filter(vm.events[0], function (calEvent) {
                return (!calEvent.isPlanification && moment(calEvent.start).month() == date.getMonth());
            }), function (survivor) {
                survivor.start = moment(survivor.start).format("MMMM DD YYYY");
                _.some(vm.studentCourses, function (_course) {
                    if (_course.id == survivor.course) {
                        survivor.course = _course;
                        return true;
                    }
                })
                return survivor;
            }), 'start')
        }

        /*** FOR PLANIFICATION **/
        function _obtainCurrentMonthPlanification() {
            return _.sortBy(_.map(_.filter(vm.events[0], function (calEvent) {
                return (
                    (moment(calEvent.start).month() == vm.calendar.getDate().month() && calEvent.isPlanification)
                    )
            }), function (survivor) {
                survivor.start = moment(survivor.start).format("MMMM DD YYYY");
                survivor.end = moment(survivor.end).format("MMMM DD YYYY");
                _.some(vm.studentCourses, function (_course) {
                    if (_course.id == survivor.course) {
                        survivor.course = _course;
                        return true;
                    }
                })
                return survivor;
            }), 'start')

        }



        vm.printMonth = function () {
            var _html = handlebarsTemplates.generateCalendarForMonth(_obtainCurrentMonthEvents(), vm.studentData)
            var _print = ['<html><head><meta charset="utf-8"><script> window.print();</script></head><body><div>' + _html + '</div></body><html>'];
            var _blob = new Blob(_print, { type: "text/html" })
            var fileURL = URL.createObjectURL(_blob);
            window.open(fileURL, '_blank');
        }


        vm.printPlanificationMonth = function () {
            var _html = handlebarsTemplates.generatePlanificationForMonth(_obtainCurrentMonthPlanification(), vm.studentData)
            var _print = ['<html><head><meta charset="utf-8"><script> window.print();</script></head><body><div>' + _html + '</div></body><html>'];
            var _blob = new Blob(_print, { type: "text/html" })
            var fileURL = URL.createObjectURL(_blob);
            window.open(fileURL, 'blank');
        }


      calendarService.setCollectionKey($stateParams.studentId);

      calendarService.getCollection();

      studentsService.getStudentCourses($stateParams.studentId)
        .then(function(data){
          vm.studentCourses = data;
        });

        vm.events = [];
        
        var _lastAdded = {};

        var eventRender = function (event, element, view) {
            console.log(event)
            if (event.course) {
                var _element = calendarService.courseSubject(event.course);
                _element.subscribe(function (data) {
                    element.find('.fc-title')[0].innerHTML = data.name;
                })
            } else {
                element.find('.fc-title')[0].innerHTML = 'Not available';
            }
            

        };

        vm.calendarUiConfig = {
            calendar: {
                timezone: 'local',
                editable     : true,
                header       : '',
                dayNames     : ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
                dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
                viewRender   : function (view)
                {
                    vm.calendarView = view;
                    vm.calendar = vm.calendarView.calendar;
                    vm.currentMonthShort = vm.calendar.getDate().format('MMM');
                },
                columnFormat : {
                    month: 'ddd',
                    week : 'ddd M',
                    day  : 'ddd M'
                },
                eventClick: eventDetail,
                eventRender: eventRender,
                selectable: true,
                selectHelper: true,
                select: select
            }
        };

        // Methods
        vm.addEvent = addEvent;
        vm.next = next;
        vm.prev = prev;

        //////////

        /**
         * Go to next on current view (week, month etc.)
         */
        function next()
        {
            vm.calendarView.calendar.next();
        }

        /**
         * Go to previous on current view (week, month etc.)
         */
        function prev()
        {
            vm.calendarView.calendar.prev();
        }

        /**
         * Show event detail
         *
         * @param calendarEvent
         * @param e
         */
        function eventDetail(calendarEvent, e)
        {
            if (calendarEvent.end) {
                calendarEvent.start = moment(calendarEvent.start._i)
                calendarEvent.end = moment(calendarEvent.end._i)
                showPlanificationDetailDialog(calendarEvent, e)
            } else {
                showEventDetailDialog(calendarEvent, e);
            }

        }


        function convertDate(d){
            var timezone = "Asia/Tokyo";
            var date = moment.tz(d, timezone).unix()

            return date;
        }

        /**
         * Add new event in between selected dates
         *
         * @param start
         * @param end
         * @param e
         */
        function select(start, end, e)
        {

            // open dialog in base of the amount of dates. diary for one day.
            // more than one day should open the schedule dialog.
            if (moment.duration(moment(end) - moment(start)).asDays() === 1 ) {
                showEventFormDialog('add', false, moment(start).add(1, 'days'), moment(start).add(1, 'days'), e);
            } else {
                showPlanificationFormDialog('add', false, moment(start).add(1, 'days'), moment(end), e);
            }
        }

        /**
         * Add event
         *
         * @param e
         */
        function addEvent(e)
        {
            var start = new Date(),
                end = new Date();
            showPlanificationFormDialog('add', false, moment(start), moment(end), e);
        }

        /**
         * Show event detail dialog
         * @param calendarEvent
         * @param e
         */
        function showEventDetailDialog(calendarEvent, e)
        {
            $mdDialog.show({
                controller         : 'EventDetailDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/calendar/dialogs/event-detail/event-detail-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : e,
                clickOutsideToClose: true,
                locals             : {
                    calendarEvent: calendarEvent,
                    studentData: vm.studentData,
                    showEventFormDialog: showEventFormDialog,
                    event              : e
                }
            });
        }


        /**
        * Show planification detail dialog
        * @param calendarEvent
        * @param e
        */
        function showPlanificationDetailDialog(calendarEvent, e) {
            $mdDialog.show({
                controller: 'PlanificationDetailDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/calendar/dialogs/planification-detail/planification-detail-dialog.html',
                parent: angular.element($document.body),
                targetEvent: e,
                clickOutsideToClose: true,
                locals: {
                    calendarEvent: calendarEvent,
                    studentData: vm.studentData,
                    showPlanificationFormDialog: showPlanificationFormDialog,
                    event: e
                }
            });
        }


        /**
         * Show schedule add/edit form dialog
         *
         * @param type
         * @param calendarEvent
         * @param start
         * @param end
         * @param e
         */

        function showPlanificationFormDialog(type, calendarEvent, start, end, e) {
            var dialogData = {
                type: type,
                calendarEvent: calendarEvent,
                start: start,
                end: end
            };

            $mdDialog.show({
                controller: 'PlanificationFormDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/calendar/dialogs/planification-form/planification-form-dialog.html',
                parent: angular.element($document.body),
                targetEvent: e,
                clickOutsideToClose: true,
                locals: {
                    dialogData: dialogData,
                    studentCourses: vm.studentCourses
                }
            }).then(function (response) {
                
                response.calendarEvent.start = convertDate(response.calendarEvent.start);
                response.calendarEvent.end = convertDate(response.calendarEvent.end);

                if (response.type == 'add') {
                    // response.calendarEvent.start = response.calendarEvent.start.toString();
                    // response.calendarEvent.end = response.calendarEvent.end.toString();
                    calendarService.create(response.calendarEvent);
                    _lastAdded = response.calendarEvent;
                } else {
                    var _id = response.calendarEvent.$id;
                    delete response.calendarEvent.$id;
                    delete response.calendarEvent.$priority;
                    delete response.calendarEvent._start;
                    delete response.calendarEvent._end;
                    delete response.calendarEvent.source
                    
                    console.log('Going to save ------ ')
                    console.log(response.calendarEvent);
                    
                    var _data = response.calendarEvent;
                    calendarService.update(_data, _id);

                }
            });
        }





        /**
         * Show event add/edit form dialog
         *
         * @param type
         * @param calendarEvent
         * @param start
         * @param end
         * @param e
         */
        function showEventFormDialog(type, calendarEvent, start, end, e)
        {
            var dialogData = {
                type         : type,
                calendarEvent:  calendarEvent,
                start        : start,
                end          : end
            };

            $mdDialog.show({
                controller         : 'EventFormDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/calendar/dialogs/event-form/event-form-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : e,
                clickOutsideToClose: true,
                locals             : {
                    dialogData: dialogData,
                    studentCourses : vm.studentCourses
                }
            }).then(function (response)
            {
                response.calendarEvent.start = convertDate(response.calendarEvent.start);
                if(response.calendarEvent.end){
                    response.calendarEvent.end = convertDate(response.calendarEvent.end);
                }
                if (response.type == 'add') {
                    calendarService.create(response.calendarEvent);
                } else {
                    var _id = response.calendarEvent.$id;
                    delete response.calendarEvent.$id;
                    delete response.calendarEvent.$priority;
                    var _source = response.calendarEvent.source;
                    delete response.calendarEvent.source
                    var _data = response.calendarEvent;
                    calendarService.update(_data, _id);

                }

            });
        }
        
        
        

    }

})();
