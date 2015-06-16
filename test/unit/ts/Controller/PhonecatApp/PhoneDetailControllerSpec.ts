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

    describe('PhoneDetailController', function(){
        var ctrl: any;
        var $httpBackend: angular.IHttpBackendService;
        var xyzPhoneData = function() {
            return {
                name: 'phone xyz',
                images: ['image/url1.png', 'image/url2.png']
            }
        };

        beforeEach(module('PhonecatApp'));
        beforeEach(module('phonecatServices'));

        beforeEach(
            inject(
                function(
                    $controller: any,
                    _$httpBackend_: angular.IHttpBackendService,
                    $routeParams: any
                ) {
                    $httpBackend = _$httpBackend_;
                    $httpBackend
                        .expectGET('data/phones/xyz.json')
                        .respond(xyzPhoneData());
                    $routeParams.phoneId = 'xyz';
                    ctrl = $controller('PhoneDetailController');
                }
            )
        );


        it('should fetch phone detail', function() {
            expect(ctrl.phone)['toEqualData']({});
            $httpBackend.flush();

            expect(ctrl.phone)['toEqualData'](xyzPhoneData());
        });
    });
});

