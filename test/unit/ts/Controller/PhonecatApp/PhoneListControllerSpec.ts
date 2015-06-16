/// <reference path="../../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../../typings/jasmine/jasmine.d.ts" />

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    beforeEach(function(){
        jasmine.addMatchers({
            toEqualData: function(util: any, customEqualityTesters: any) {
                return {
                    compare: function(actual: any, expected: any) {
                        var passed = angular.equals(actual, expected);
                        return {
                            pass: passed,
                            message: 'Expected ' + actual + (passed ? '' : ' not') + ' to equal ' + expected
                        };
                    }
                };
            }
        });
    });

    describe('PhoneListController', function(){
        var ctrl: any;
        var $httpBackend: angular.IHttpBackendService;

        beforeEach(module('PhonecatApp'));
        beforeEach(module('phonecatServices'));

        beforeEach(
            inject(
                function(
                    $controller: any,
                    _$httpBackend_: angular.IHttpBackendService
                ) {
                    $httpBackend = _$httpBackend_;
                    $httpBackend.expectGET('data/phones/phones.json')
                        .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
                    ctrl = $controller('PhoneListController');
                }
            )
        );

        it('should create "phones" model with 2 phones fetched from xhr', function() {
            expect(ctrl.phones)['toEqualData']([]);
            $httpBackend.flush();

            expect(ctrl.phones)['toEqualData']([
                {name: 'Nexus S'},
                {name: 'Motorola DROID'}
            ]);
        });

        it('should set the default value of orderProp model', function() {
            expect(ctrl.orderProp).toBe('age');
        });
    });
});
