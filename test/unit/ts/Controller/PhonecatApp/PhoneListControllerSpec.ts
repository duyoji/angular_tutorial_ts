/// <reference path="../../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../../typings/jasmine/jasmine.d.ts" />

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    describe('PhoneListController', function(){
        var ctrl: any;
        var $httpBackend: angular.IHttpBackendService;

        beforeEach(module('PhonecatApp'));

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
            expect(ctrl.phones).toBeUndefined();
            $httpBackend.flush();

            expect(ctrl.phones).toEqual([
                {name: 'Nexus S'},
                {name: 'Motorola DROID'}
            ]);
        });

        it('should set the default value of orderProp model', function() {
            expect(ctrl.orderProp).toBe('age');
        });
    });
});
