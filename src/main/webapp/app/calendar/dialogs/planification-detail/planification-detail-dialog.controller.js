(function ()
{
    'use strict';

    angular.module('app.calendar')
        .controller('PlanificationDetailDialogController', PlanificationDetailDialogController);

    /** @ngInject */
    function PlanificationDetailDialogController($mdDialog, calendarEvent, studentData, handlebarsTemplates, showPlanificationFormDialog, event)
    {
        var vm = this;

        // Data
        vm.calendarEvent = calendarEvent;

        // Methods
        vm.editEvent = editEvent;
        vm.closeDialog = closeDialog;

        console.log(vm.calendarEvent);

        vm.printEvent = function () { 
            var _html = handlebarsTemplates.generatePlanificationHtml(calendarEvent, vm.courseData, studentData)
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
            showPlanificationFormDialog('edit', calendarEvent, false, false, event);
        }
    }
})();
