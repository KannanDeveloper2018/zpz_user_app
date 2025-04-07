"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InfoPage = void 0;
var core_1 = require("@angular/core");
var InfoPage = /** @class */ (function () {
    function InfoPage(platform, loadingController, server, nav, toastController, alertController) {
        this.platform = platform;
        this.loadingController = loadingController;
        this.server = server;
        this.nav = nav;
        this.toastController = toastController;
        this.alertController = alertController;
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.data = JSON.parse(localStorage.getItem('store_data'));
        console.log(this.data);
    }
    InfoPage.prototype.ngOnInit = function () {
    };
    InfoPage = __decorate([
        core_1.Component({
            selector: 'app-info',
            templateUrl: 'info.page.html',
            styleUrls: ['info.page.scss']
        })
    ], InfoPage);
    return InfoPage;
}());
exports.InfoPage = InfoPage;
