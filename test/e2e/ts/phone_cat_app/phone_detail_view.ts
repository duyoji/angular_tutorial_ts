/// <reference path="../../../../typings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

describe('Phone detail view', function() {
    beforeEach(function() {
        browser.get('index.html#/phones/nexus-s');
    });

    it('should display nexus-s page', function() {
        expect(element(by.binding('c.phone.name')).getText()).toBe('Nexus S');
    });

    it('should display the first phone image as the main phone image', function() {
        expect(element(by.css('img.phone')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });

    it('should swap main image if a thumbnail image is clicked on', function() {
        element(by.css('.phone-thumbs li:nth-child(3) img')).click();
        expect(element(by.css('img.phone')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);

        element(by.css('.phone-thumbs li:nth-child(1) img')).click();
        expect(element(by.css('img.phone')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });
});
