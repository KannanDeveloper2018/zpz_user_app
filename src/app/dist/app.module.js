"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@awesome-cordova-plugins/splash-screen/ngx");
var ngx_2 = require("@awesome-cordova-plugins/status-bar/ngx");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
var ngx_3 = require("@awesome-cordova-plugins/stripe/ngx");
var option_module_1 = require("./option/option.module");
var offer_module_1 = require("./offer/offer.module");
var ngx_4 = require("@awesome-cordova-plugins/native-geocoder/ngx");
var ngx_5 = require("@awesome-cordova-plugins/geolocation/ngx");
var ngx_6 = require("@ionic-native/paypal/ngx");
var ngx_7 = require("@awesome-cordova-plugins/in-app-browser/ngx");
var ngx_8 = require("@awesome-cordova-plugins/photo-viewer/ngx");
var service_worker_1 = require("@angular/service-worker");
var environment_1 = require("../environments/environment");
var ngx_9 = require("@awesome-cordova-plugins/onesignal/ngx");
var menu_module_1 = require("./menu/menu.module");
var note_module_1 = require("./note/note.module");
var payment_module_1 = require("./payment/payment.module");
var select_address_module_1 = require("./select-address/select-address.module");
var tip_module_1 = require("./tip/tip.module");
var ngx_10 = require("@awesome-cordova-plugins/native-page-transitions/ngx");
var ngx_11 = require("@awesome-cordova-plugins/clipboard/ngx");
var flutterwave_angular_v3_1 = require("flutterwave-angular-v3");
var ngx_12 = require("@ionic-native/diagnostic/ngx");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            entryComponents: [],
            imports: [
                platform_browser_1.BrowserModule,
                flutterwave_angular_v3_1.FlutterwaveModule,
                angular_1.IonicModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                option_module_1.OptionPageModule,
                offer_module_1.OfferPageModule,
                menu_module_1.MenuPageModule,
                note_module_1.NotePageModule,
                payment_module_1.PaymentPageModule,
                select_address_module_1.SelectAddressPageModule,
                tip_module_1.TipPageModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production }),
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', {
                    enabled: environment_1.environment.production,
                    // Register the ServiceWorker as soon as the application is stable
                    // or after 30 seconds (whichever comes first).
                    registrationStrategy: 'registerWhenStable:30000'
                }),
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', {
                    enabled: !core_1.isDevMode(),
                    // Register the ServiceWorker as soon as the application is stable
                    // or after 30 seconds (whichever comes first).
                    registrationStrategy: 'registerWhenStable:30000'
                }),
            ],
            providers: [
                ngx_2.StatusBar,
                ngx_1.SplashScreen,
                ngx_3.Stripe,
                ngx_9.OneSignal,
                ngx_4.NativeGeocoder,
                ngx_5.Geolocation,
                ngx_6.PayPal,
                ngx_7.InAppBrowser,
                ngx_8.PhotoViewer,
                ngx_10.NativePageTransitions,
                ngx_11.Clipboard,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                ngx_12.Diagnostic
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
