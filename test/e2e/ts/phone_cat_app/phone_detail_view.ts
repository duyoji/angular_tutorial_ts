/// <reference path="../../../../typings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

describe('Phone detail view', function() {
    beforeEach(function() {
        browser.get('index.html#/phones/nexus-s');
    });

    it('should display placeholder page with phoneId', function() {
        expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
    });
});
