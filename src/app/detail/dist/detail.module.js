"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var detail_routing_module_1 = require("./detail-routing.module");
var detail_page_1 = require("./detail.page");
var ngx_1 = require("@ionic-native/android-permissions/ngx");
var ngx_2 = require("@ionic-native/diagnostic/ngx");
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                detail_routing_module_1.DetailPageRoutingModule
            ],
            providers: [ngx_1.AndroidPermissions, ngx_2.Diagnostic],
            declarations: [detail_page_1.DetailPage]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());
exports.DetailPageModule = DetailPageModule;
