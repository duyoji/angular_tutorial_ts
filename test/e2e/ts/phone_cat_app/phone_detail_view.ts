/// <reference path="../../../../typings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

describe('Phone detail view', function() {
    beforeEach(function() {
        browser.get('index.html#/phones/nexus-s');
    });

    it('should display nexus-s page', function() {
        expect(element(by.binding('c.phone.name')).getText()).toBe('Nexus S');
    });
});
