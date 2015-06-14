/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

module Controller.PhonecatApp {
    export class PhoneDetailController {
        private phoneId: string;

        constructor (routeParams: angular.route.IRouteParamsService) {
            this.phoneId = routeParams['phoneId'];
        }
    }
}
