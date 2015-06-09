/// <reference path="../../../../typings/angularjs/angular.d.ts" />

interface Phone {
    name: string;
    snippet: string;
}

module Controller.PhonecatApp {
    export class PhoneListController {
        public phones:    Phone[];
        public orderProp: string;

        constructor () {
            this.phones = [
                {
                    'name': 'Nexus S',
                    'snippet': 'Fast just got faster with Nexus S.',
                    'age': 1
                },
                {
                    'name': 'Motorola XOOM™ with Wi-Fi',
                    'snippet': 'The Next, Next Generation tablet.',
                    'age': 2
                },
                {
                    'name': 'MOTOROLA XOOM™',
                    'snippet': 'The Next, Next Generation tablet.',
                    'age': 3
                }
            ];
            this.orderProp = 'age';
        }

        static init () {
            var phonecatApp = angular.module('PhonecatApp', []);
            phonecatApp.controller('PhoneListController', [PhoneListController]);
        }
    }
}
