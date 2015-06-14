/// <reference path="../../../../typings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

describe('Phone detail view', function() {
    beforeEach(function() {
        browser.get('index.html#/phones/nexus-s');
    });

    it('should display nexus-s page', function() {
        expect(element(by.binding('c.phone.name')).getText()).toBe('Nexus S');

        // thumbnails
        var thumbnailUrls =
            element
                .all(by.repeater('img in c.phone.images'))
                .all(by.tagName('img'));

        function getNgSrcValues() {
            return thumbnailUrls.map(function(elm) {
                return elm.getAttribute('ng-src');
            });
        }

        expect(thumbnailUrls.count()).toBe(4);
        expect(getNgSrcValues()).toEqual(
            [
                "img/phones/nexus-s.0.jpg",
                "img/phones/nexus-s.1.jpg",
                "img/phones/nexus-s.2.jpg",
                "img/phones/nexus-s.3.jpg"
            ]
        );


    });
});
