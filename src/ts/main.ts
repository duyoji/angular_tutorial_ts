/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="./Controller/PhonecatApp/PhoneListController.ts" />
/// <reference path="./Controller/PhonecatApp/PhoneDetailController.ts" />

import PhoneListController   = Controller.PhonecatApp.PhoneListController;
import PhoneDetailController = Controller.PhonecatApp.PhoneDetailController;
var phonecatApp = angular.module('PhonecatApp', [
    'ngRoute',
    'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
function($routeProvider: angular.route.IRouteProvider) {
    $routeProvider
        .when('/phones', {
            templateUrl : 'partials/phone-list.html',
            controller  : 'PhoneListController',
            controllerAs: 'c'
        })
        .when('/phones/:phoneId', {
            templateUrl : 'partials/phone-detail.html',
            controller  : 'PhoneDetailController',
            controllerAs: 'c'
        })
        .otherwise({
            redirectTo: '/phones'
        });
}]);

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller(
    'PhoneListController',
    ['$http', PhoneListController]
);
phonecatControllers.controller(
    'PhoneDetailController',
    ['$routeParams', PhoneDetailController]
);
