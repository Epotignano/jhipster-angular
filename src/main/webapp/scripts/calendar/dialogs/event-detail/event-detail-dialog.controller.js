(function ()
{
    'use strict';

    angular.module('app.calendar')
        .controller('EventDetailDialogController', EventDetailDialogController);

    /** @ngInject */
    function EventDetailDialogController($mdDialog, calendarEvent, studentData, handlebarsTemplates, showEventFormDialog, event)
    {
        var vm = this;

        // Data
        vm.calendarEvent = calendarEvent;

        // Methods
        vm.editEvent = editEvent;
        vm.closeDialog = closeDialog;

        console.log(vm.calendarEvent);

        vm.printEvent = function () { 
            var _html = handlebarsTemplates.generateCalendarEventHtml(calendarEvent, vm.courseData, studentData)

            var _print = ['<html><head><meta charset="utf-8"><script> window.print();</script></head><body><div><a id="a"><b id="b">' +  _html +'</b></a></div></body><html>'];  
            var _blob = new Blob(_print, { type: "text/html" })
            
            var fileURL = URL.createObjectURL(_blob);
            window.open(fileURL, '_blank');
        }

        //////////

        function closeDialog()
        {
            $mdDialog.hide();
        }

        function editEvent(calendarEvent)
        {
            showEventFormDialog('edit', calendarEvent, false, false, event);
        }
    }
})();
