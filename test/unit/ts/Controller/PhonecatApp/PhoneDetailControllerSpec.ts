/// <reference path="../../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../../typings/jasmine/jasmine.d.ts" />

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {
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
            expect(ctrl.phone).toBeUndefined();
            $httpBackend.flush();

            expect(ctrl.phone).toEqual(xyzPhoneData());
            expect(ctrl.mainImageUrl).toEqual(xyzPhoneData().images[0]);
        });
    });
});

