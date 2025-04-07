"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DetailPage = void 0;
var core_1 = require("@angular/core");
var DetailPage = /** @class */ (function () {
    function DetailPage(platform, loadingController, androidPermissions, diagnostic, server, nav, toastController, alertController, route, geolocation, nativeGeocoder) {
        var _this = this;
        this.platform = platform;
        this.loadingController = loadingController;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.server = server;
        this.nav = nav;
        this.toastController = toastController;
        this.alertController = alertController;
        this.route = route;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.fakeData = [1, 2, 3, 4, 5, 6, 7];
        this.has_detail = false;
        this.oid = this.route.snapshot.paramMap.get('id');
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.intr = setInterval(function () {
            _this.checkperm();
            _this.loadData();
        }, 15000);
    }
    DetailPage.prototype.ngOnInit = function () {
    };
    DetailPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.intr);
    };
    DetailPage.prototype.ionViewWillEnter = function () {
        this.checkperm();
        this.loadData();
    };
    DetailPage.prototype.checkperm = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
                _this.checkSetting();
                // clearInterval(this.intr);
            }
        }, function (err) { });
    };
    DetailPage.prototype.checkSetting = function () {
        var _this = this;
        this.diagnostic.isLocationEnabled().then(function (isEnabled) {
            if (!isEnabled && _this.platform.is('cordova')) {
                _this.diagnostic.switchToLocationSettings();
            }
            else {
                _this.loadData();
            }
        });
        this.loadData();
    };
    DetailPage.prototype.showDetail = function () {
        this.has_detail = this.has_detail == true ? false : true;
        this.loadMap();
    };
    DetailPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.server.orderDetail(this.oid).subscribe(function (response) {
                    _this.data = response.data;
                    if (_this.data.st == 2) {
                        _this.nav.navigateRoot('/home');
                        _this.presentToast(_this.text.order_cancel_text);
                    }
                    console.log(_this.data);
                    _this.loadMap();
                });
                return [2 /*return*/];
            });
        });
    };
    DetailPage.prototype.presentToast = function (txt) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: txt,
                            duration: 3000,
                            position: 'top',
                            mode: 'ios',
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailPage.prototype.loadMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gmarkers;
            var _this = this;
            return __generator(this, function (_a) {
                gmarkers = [];
                this.geolocation.getCurrentPosition().then(function (resp) {
                    var latLng = new google.maps.LatLng(_this.data.lat, _this.data.lng);
                    var mapOptions = {
                        center: latLng,
                        zoom: 16,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        disableDefaultUI: true
                    };
                    _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                    _this.directionsService = new google.maps.DirectionsService;
                    _this.directionsDisplay = new google.maps.DirectionsRenderer;
                    for (var i = 0; i < gmarkers.length; i++) {
                        gmarkers[i].setMap(null);
                    }
                    if (_this.data.st == 0 || _this.data.st == 1) {
                        _this.startNavigating(_this.data.order.slat, _this.data.order.slng);
                    }
                    else {
                        _this.startNavigating(_this.data.lat, _this.data.lng);
                    }
                })["catch"](function (error) {
                    console.log('Error getting location', error);
                });
                return [2 /*return*/];
            });
        });
    };
    DetailPage.prototype.startNavigating = function (lat, lng) {
        var _this = this;
        this.directionsDisplay.setMap(this.map);
        this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        this.directionsService.route({
            origin: { lat: parseFloat(lat), lng: parseFloat(lng) },
            destination: { lat: parseFloat(this.data.order.lat), lng: parseFloat(this.data.order.lng) },
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                _this.directionsDisplay.setDirections(res);
                var point = res.routes[0].legs[0];
                _this.tm = point.duration.text;
            }
            else {
                console.warn(status);
            }
        });
    };
    __decorate([
        core_1.ViewChild('map', { static: false })
    ], DetailPage.prototype, "mapElement");
    __decorate([
        core_1.ViewChild('directionsPanel', { static: false })
    ], DetailPage.prototype, "directionsPanel");
    DetailPage = __decorate([
        core_1.Component({
            selector: 'app-detail',
            templateUrl: 'detail.page.html',
            styleUrls: ['detail.page.scss']
        })
    ], DetailPage);
    return DetailPage;
}());
exports.DetailPage = DetailPage;
