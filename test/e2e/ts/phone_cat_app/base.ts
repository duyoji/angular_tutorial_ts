/// <reference path="../../../../typings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

/* jasmine specs for controllers go here */
describe('PhoneCat App', function() {

    it('should redirect index.html to index.html#/phones', function(){
        browser.get('index.html');
        browser.getLocationAbsUrl().then(function(url) {
            expect(url).toBe('/phones');
        });
    });
});
