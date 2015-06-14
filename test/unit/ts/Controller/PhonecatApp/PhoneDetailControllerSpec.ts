/// <reference path="../../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../../typings/jasmine/jasmine.d.ts" />

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {
    describe('PhoneDetailController', function(){
        var ctrl: any;
        var $httpBackend: angular.IHttpBackendService;

        beforeEach(module('PhonecatApp'));

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
                        .respond({name:'phone xyz'});
                    $routeParams.phoneId = 'xyz';
                    ctrl = $controller('PhoneDetailController');
                }
            )
        );


        it('should fetch phone detail', function() {
            expect(ctrl.phone).toBeUndefined();
            $httpBackend.flush();

            expect(ctrl.phone).toEqual({name:'phone xyz'});
        });
    });
});

