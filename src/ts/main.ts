/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="./Controller/PhonecatApp/PhoneListController.ts" />
/// <reference path="./Controller/PhonecatApp/PhoneDetailController.ts" />

import PhoneListController   = Controller.PhonecatApp.PhoneListController;
import PhoneDetailController = Controller.PhonecatApp.PhoneDetailController;

var phonecatApp = angular.module('PhonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
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

// contoroller setting
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller(
    'PhoneListController',
    ['Phone', PhoneListController]
);
phonecatControllers.controller(
    'PhoneDetailController',
    ['$routeParams', 'Phone', PhoneDetailController]
);

// filter setting
angular.module('phonecatFilters', []).filter('checkmark', function() {
    return function(input: boolean) {
        return input ? '\u2713' : '\u2718';
    };
});

// service setting
var phonecatServices = angular.module('phonecatServices', ['ngResource']);
phonecatServices.factory(
    'Phone',
    ['$resource', function($resource: angular.resource.IResourceService){
    return $resource(
        'data/phones/:phoneId.json',
        {},
        {
            query: {
                method:'GET',
                params:{
                    phoneId:'phones'
                },
                isArray:true
            }
        }
    );
    }]
);
