/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

module Controller.PhonecatApp {
    export class PhoneDetailController {
        private phoneId: string;
        private httpService: angular.IHttpService;
        private phone: any;

        constructor (
            routeParams: angular.route.IRouteParamsService,
            httpService: angular.IHttpService
        ) {
            this.phoneId     = routeParams['phoneId'];
            this.httpService = httpService;
            this.httpService
                .get('data/phones/' + this.phoneId + '.json')
                .success((data: any) => {
                    this.phone = data;
                });
        }
    }
}
