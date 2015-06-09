/// <reference path="../../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../../typings/jasmine/jasmine.d.ts" />

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    describe('PhoneListController', function(){
        var ctrl: any;

        beforeEach(module('PhonecatApp'));

        beforeEach(inject(function($controller:any) {
            ctrl = $controller('PhoneListController');
        }));

        it('should create "phones" model with 3 phones', function() {
            expect(ctrl.phones.length).toBe(3);
        });

        it('should set the default value of orderProp model', function() {
            expect(ctrl.orderProp).toBe('age');
        });
    });
});
