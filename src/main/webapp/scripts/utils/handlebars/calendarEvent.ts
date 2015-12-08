/// <reference path="../../../../.tmp/typings/tsd.d.ts" />

module app.utils {
    class HandlebarsTemplates {
        public eventTranslations;
        constructor() {
            this.eventTranslations = {
                ja: {
                    'YES': 'はい',
                    'NO': 'いいえ',
                    'EVENT_TITLE': '授業日誌',
                    'ATTENDANCE': '出欠',
                    'COURSE': '授業',
                    'HOMEWORK_DONE': '宿題提出状況',
                    'BOOK_NAME': '教科書名',
                    'SECTION': '単元',
                    'PAGES': 'ページ',
                    'NEXT_HOMEWORK': '宿題',
                    'SMALL_TEST': '小テスト',
                    'NOTES': '備考',
                    'DONE': '仕上がる',
                    "PLANIFICATION": "学習計画"
                }
            };

            Handlebars.registerHelper('planificationEvent', (eventData, courseData) => {

                var _data = { eventData, courseData: courseData };

                var _template = '<h2 style="border-top: solid 1px"> {{ courseData.name }}</h2>';
                _template += '<h3 style="border-bottom: solid 1px"> {{ eventData.start }} - {{ eventData.end }}</h3>';
                _template += '{{#planificationDetail eventData }}{{/planificationDetail}}</h3>';
                _template += '</div>';

                var _studentEvent = Handlebars.compile(_template);
                return _studentEvent(_data);
            });

            Handlebars.registerHelper('studentEvent', (eventData, courseData) => {

                var _data = { eventData, courseData: courseData };

                var _template = '<h2 style="border-top: solid 1px"> {{ courseData.name }}</h2>';
                _template += '<h3 style="border-bottom: solid 1px"> {{ eventData.start }}</h3>';
                _template += '{{#planificationDetail eventData }}{{/planificationDetail}}</h3>';
                _template += '</div>';

                var _studentEvent = Handlebars.compile(_template);
                return _studentEvent(_data);
            });

            Handlebars.registerHelper('planificationDetail', (eventData) => {

                var _helperData = {
                    i18n: this.eventTranslations.ja,
                    calendarEvent: eventData
                };


                var _template = '';

                _template += '<table><thead><tr>';

                _template += '<th> {{ i18n.BOOK_NAME }}';
                _template += '</th>';

                _template += '<th> {{ i18n.SECTION }}';
                _template += '</th>';


                _template += '<th> {{ i18n.PAGES }}';
                _template += '</th>';

                _template += '</tr></thead><tbody><tr>';

                _template += '<td>';
                _template += '{{ calendarEvent.book }}';
                _template += '</td>';

                _template += '<td>';
                _template += '{{ calendarEvent.section }}';
                _template += '</td>';

                _template += '<td>';
                _template += '{{ calendarEvent.from}} - {{ calendarEvent.from}}';
                _template += '</td>';

                _template += '</tr></tbody></table> ';

                _template += '<div><h4>{{ i18n.NOTES }}: <span> {{ calendarEvent.notes }} </span> </h4><hr></hr></div>';

                var _compiledTemplate = Handlebars.compile(_template);
                return _compiledTemplate(_helperData);
            });



            Handlebars.registerHelper('calendarEvent', (eventData) => {

                var _helperData = {
                    i18n: this.eventTranslations.ja,
                    calendarEvent: eventData
                };


                var _template = '';

                _template += '<h4> {{ i18n.HOMEWORK_DONE }}</h4>';
                _template += '<table><thead><tr>';

                _template += '<th> {{ i18n.DONE}}';
                _template += '</th>';

                _template += '<th> % ';
                _template += '</th>';

                _template += '<th> {{ i18n.BOOK_NAME }}';
                _template += '</th>';

                _template += '<th> {{ i18n.SECTION }}';
                _template += '</th>';


                _template += '<th> {{ i18n.PAGES }}';
                _template += '</th>';

                _template += '</tr></thead><tbody><tr>';

                _template += '<td>';
                _template += '{{#if calendarEvent.homework.completed}} <span> {{i18n.YES }}</span>';
                _template += '{{else}}<span> {{i18n.NO }}</span>{{/if}}';
                _template += '</td>';

                _template += '<td>';
                _template += '{{ calendarEvent.homework.completionGrade }}';
                _template += '</td>';

                _template += '<td>';
                _template += '{{ calendarEvent.homework.book }}';
                _template += '</td>';

                _template += '<td>';
                _template += '{{ calendarEvent.homework.section }}';
                _template += '</td>';

                _template += '<td>';
                _template += '{{ calendarEvent.homework.from}} - {{ calendarEvent.homework.from}}';
                _template += '</td>';

                _template += '</tr></tbody></table> ';

                _template += '<h4> {{ i18n.NEXT_HOMEWORK }}</h4>';
                _template += '<table><thead><tr>';

                _template += '<th> {{ i18n.BOOK_NAME }}';
                _template += '</th>';

                _template += '<th> {{ i18n.SECTION }}';
                _template += '</th>';


                _template += '<th> {{ i18n.PAGES }}';
                _template += '</th>';

                _template += '</tr></thead><tbody><tr>';

                _template += '<td>';
                _template += '{{ calendarEvent.homework.book }}';
                _template += '</td>';

                _template += '<td>';
                _template += '{{ calendarEvent.homework.section }}';
                _template += '</td>';

                _template += '<td>';
                _template += '{{ calendarEvent.homework.from}} - {{ calendarEvent.homework.from}}';
                _template += '</td>';

                _template += '</tr></tbody></table> ';

                _template += '<div><h4>{{ i18n.SMALL_TEST}}: <span> {{ calendarEvent.smallTest }} </span> </h4></div>';
                _template += '<div><h4>{{ i18n.NOTES }}: <span> {{ calendarEvent.notes }} </span> </h4><hr></hr></div>';

                var _compiledTemplate = Handlebars.compile(_template);
                return _compiledTemplate(_helperData);
            });

           
        }


        /*** PLANIFICATION EVENT PER MONTH **/

        generatePlanificationForMonth(eventsCollection, studentData) {


            var _data = { eventsCollection, studentData, i18n: this.eventTranslations.ja };

            var _template = '<div><h1>{{ i18n.PLANIFICATION}} - {{ studentData.fullName }}</h1>';
            _template += '{{#each eventsCollection}}';
            _template += '{{#planificationEvent this this.course }} {{/planificationEvent}}';
            _template += '{{/each}}';
            _template += '</div>';

            var _html = Handlebars.compile(_template);
            return _html(_data);

        }


        /*** SINGLE PLANIFICATION EVENT ***/

        generatePlanificationHtml(eventData, courseData, studentData) {
            var _data = {
                student: studentData,
                event: eventData,
                course: courseData,
                i18n: this.eventTranslations.ja
            };

            _data.event.start = moment(_data.event.start).format('MMMM DD YYYY');
            _data.event.end = moment(_data.event.end).format('MMMM DD YYYY');


            var _template = '<div><h1>{{ i18n.PLANIFICATION}} - {{ student.fullName }}</h1>';
            _template += '{{#planificationEvent event course }} {{/planificationEvent}}';
            _template += '</div>';

            var _html = Handlebars.compile(_template);
            return _html(_data);



        }


        /**** STUDENT DIARY MONTH ****/

        generateCalendarForMonth(eventsCollection, studentData) {


            var _data = { eventsCollection, studentData, i18n: this.eventTranslations.ja };

            var _template = '<div><h1>{{ i18n.EVENT_TITLE}} - {{ studentData.fullName }}</h1>';
            _template += '{{#each eventsCollection}}';
            _template += '{{#studentEvent this this.course }} {{/studentEvent}}';
            _template += '{{/each}}';
            _template += '</div>';

            var _html = Handlebars.compile(_template);
            return _html(_data);

        }

        /*** STUDENT DIARY FOR ONE DAY ***/

        generateCalendarEventHtml(eventData, courseData, studentData) {

            var _data = {
                student: studentData,
                event: eventData,
                course: courseData,
                i18n: this.eventTranslations.ja
            };

            _data.event.start = moment(_data.event.start).format('MMMM DD YYYY');


            var _template = '<div><h1>{{ i18n.EVENT_TITLE}} - {{ student.fullName }}</h1>';
            _template += '{{#studentEvent event course }} {{/studentEvent}}';
            _template += '</div>';


            var _html = Handlebars.compile(_template);
            return _html(_data);

        }  
    };
    angular.module('utils.handlerBars', [])
        .service('handlebarsTemplates', HandlebarsTemplates);

}