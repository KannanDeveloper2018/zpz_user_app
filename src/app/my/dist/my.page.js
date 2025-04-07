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
exports.MyPage = void 0;
var core_1 = require("@angular/core");
var MyPage = /** @class */ (function () {
    function MyPage(route, server, toastController, nav, loadingController, alertController) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.text = JSON.parse(localStorage.getItem('app_text'));
        if (localStorage.getItem('user_data') && localStorage.getItem('user_data') != undefined) {
            this.udata = JSON.parse(localStorage.getItem('user_data'));
        }
    }
    MyPage.prototype.ngOnInit = function () {
        if (this.udata && this.udata.phone) {
            this.loadData();
        }
    };
    MyPage.prototype.show = function (id) {
        this.oid = this.oid == id ? null : id;
    };
    MyPage.prototype.ionViewWillEnter = function () {
    };
    MyPage.prototype.getTotalPrice = function (curruncy, payable, tip) {
        console.log((payable + tip));
        return curruncy + (Number(payable) + Number(tip));
    };
    MyPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("loading");
                        return [4 /*yield*/, this.loadingController.create({
                                message: '',
                                spinner: 'bubbles'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.server.my(localStorage.getItem('user_id')).subscribe(function (response) {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                            _this.data = response.data;
                            var sub_total = 0;
                            for (var i = 0; i < ((_a = _this.data) === null || _a === void 0 ? void 0 : _a.length); i++) {
                                if (((_c = (_b = _this.data[i]) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                                    for (var j = 0; j < ((_e = (_d = _this.data[i]) === null || _d === void 0 ? void 0 : _d.items) === null || _e === void 0 ? void 0 : _e.length); j++) {
                                        sub_total += ((_g = (_f = _this.data[i]) === null || _f === void 0 ? void 0 : _f.items[j]) === null || _g === void 0 ? void 0 : _g.price) * ((_j = (_h = _this.data[i]) === null || _h === void 0 ? void 0 : _h.items[j]) === null || _j === void 0 ? void 0 : _j.qty);
                                    }
                                    Object.assign(_this.data[i], { "sub_total": sub_total });
                                }
                                sub_total = 0;
                            }
                            // (this.data).filter((item) => {
                            //     sub_total += item.items.price * item.items.qty ;
                            //     console.log(sub_total);
                            // });
                            // this.data[0].push({"sub_total" : sub_total});
                            // }
                            console.log(_this.data);
                            loading.dismiss();
                        }, function (error) {
                            loading.dismiss();
                            console.log(error.toString());
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPage.prototype.cancelOrder = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("loading");
                        return [4 /*yield*/, this.loadingController.create({
                                message: '',
                                spinner: 'bubbles'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.server.cancelOrder(id).subscribe(function (response) {
                            _this.data = response.data;
                            console.log(response.data);
                            loading.dismiss();
                        }, function (error) {
                            loading.dismiss();
                            console.log(error.toString());
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPage.prototype.presentAlertConfirm = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Are you sure?',
                            message: 'Want to cancel this order?',
                            mode: 'ios',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.cancelOrder(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPage.prototype.presentToast = function (txt) {
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
    MyPage = __decorate([
        core_1.Component({
            selector: 'app-my',
            templateUrl: './my.page.html',
            styleUrls: ['./my.page.scss']
        })
    ], MyPage);
    return MyPage;
}());
exports.MyPage = MyPage;
