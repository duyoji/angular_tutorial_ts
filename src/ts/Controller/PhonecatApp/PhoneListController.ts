/// <reference path="../../../../typings/angularjs/angular.d.ts" />

interface Phone {
    name: string;
    snippet: string;
}

module Controller.PhonecatApp {
    export class PhoneListController {
        public  phones: Phone[];
        public  orderProp: string;
        private httpService: angular.IHttpService;

        constructor (httpService: angular.IHttpService) {
            this.httpService = httpService;
            this.orderProp = 'age';
            this.httpService
                .get('data/phones/phones.json')
                .success((data: any) => {
                    this.phones = data;
                });
        }
    }
}
