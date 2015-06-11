/// <reference path="../../../typings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />

/* jasmine specs for controllers go here */
describe('PhoneCat App', function() {

    describe('Phone list view', function(){

        beforeEach(function () {
            browser.get('index.html');
        });


        it('should filter the phone list as a user types into the search box', function() {

            var phoneList = element.all(by.repeater('phone in c.phones'));
            var query = element(by.model('c.query'));

            expect(phoneList.count()).toBe(20);
            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(8);
        });

        it('should be possible to control phone order via the drop down select box', function() {
            var phoneNameColumn = element.all(by.repeater('phone in c.phones').column('phone.name'));
            var query = element(by.model('c.query'));

            function getNames() {
                return phoneNameColumn.map(function(elm) {
                    return elm.getText();
                });
            }

            query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

            expect(getNames()).toEqual(
                [
                    "Motorola XOOM\u2122 with Wi-Fi",
                    "MOTOROLA XOOM\u2122"
                ]
            );

            element(by.model('c.orderProp')).element(by.css('option[value="name"]')).click();
            expect(getNames()).toEqual(
                [
                    "MOTOROLA XOOM\u2122",
                    "Motorola XOOM\u2122 with Wi-Fi"
                ]
            );

        });

        it('should render phone specific links', function() {
            var query = element(by.model('c.query'));
            query.sendKeys('nexus');
            element.all(by.css('.phones li a')).first().click();
            browser.getLocationAbsUrl().then(function(url) {
                // https://github.com/angular/angular-phonecat/issues/241
                // "getLocationAbsUrl" returns relativePath
                // expect(url.split('#')[1]).toBe('/phones/nexus-s');
                expect(url).toBe('/phones/nexus-s');
            });
        });

    });
});
