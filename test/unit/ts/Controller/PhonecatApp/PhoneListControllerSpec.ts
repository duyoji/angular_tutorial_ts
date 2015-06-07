/// <reference path="../../../../../typings/tsd.d.ts" />

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    describe('PhoneListController', function(){

        beforeEach(module('PhonecatApp'));

        it('should create "phones" model with 3 phones', inject(function($controller:any) {
            var ctrl = $controller('PhoneListController');
            expect(ctrl.phones.length).toBe(3);
        }));

    });
});
