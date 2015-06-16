/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

module Controller.PhonecatApp {
    export class PhoneDetailController {
        private phone: any;
        public  mainImageUrl: string;

        constructor (
            routeParams: angular.route.IRouteParamsService,
            Phone: any
        ) {
            this.phone = Phone.get(
                {phoneId: routeParams['phoneId']},
                (phone: any) => {
                    this.mainImageUrl = phone.images[0];
                }
            );
        }

        setImage(imageUrl: string): void {
            this.mainImageUrl = imageUrl;
        }
    }
}
