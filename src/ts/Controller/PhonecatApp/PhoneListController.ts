/// <reference path="../../../../typings/angularjs/angular.d.ts" />

interface Phone {
    name: string;
    snippet: string;
}

module Controller.PhonecatApp {
    export class PhoneListController {
        public phones: Phone[];
        public orderProp: string;

        constructor (Phone: any) {
            this.phones    = Phone.query();
            this.orderProp = 'age';
        }
    }
}
