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
exports.CartPage = void 0;
var core_1 = require("@angular/core");
var offer_page_1 = require("../offer/offer.page");
var note_page_1 = require("../note/note.page");
var CartPage = /** @class */ (function () {
    function CartPage(platform, modalController, loadingController, server, nav, toastController, alertController) {
        this.platform = platform;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.server = server;
        this.nav = nav;
        this.toastController = toastController;
        this.alertController = alertController;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    CartPage.prototype.ngOnInit = function () {
    };
    CartPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    CartPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadData();
        this.subscription = this.platform.backButton.subscribe(function () {
            _this.modalController.dismiss({ data: true });
        });
    };
    CartPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '',
                            spinner: 'bubbles'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.server.getCart(localStorage.getItem('cart_no')).subscribe(function (response) {
                            _this.data = response.data;
                            console.log(_this.data);
                            if (_this.data.open == false) {
                                _this.presentToast(_this.text.store_close);
                                _this.nav.navigateRoot('/home');
                            }
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
    CartPage.prototype.updateCart = function (id, type) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'bubbles'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.server.updateCart(id, type + "?lid=" + localStorage.getItem('lid') + "&lat=" + localStorage.getItem('current_lat') + "&lng=" + localStorage.getItem('current_lng')).subscribe(function (response) {
                            _this.data = response.data;
                            loading.dismiss();
                        });
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.presentToast = function (txt) {
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
    CartPage.prototype.coupen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: offer_page_1.OfferPage,
                            animated: true,
                            mode: 'ios',
                            cssClass: 'my-custom-modal-css',
                            backdropDismiss: true,
                            swipeToClose: true
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(data.data.id);
                            if (data.data.id) {
                                _this.applyCoupen(data.data.id);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartPage.prototype.applyCoupen = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'bubbles'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.server.applyCoupen(id, localStorage.getItem('cart_no') + "?lid=" + localStorage.getItem('lid')).subscribe(function (response) {
                            if (response.msg == "done") {
                                _this.data = response.data;
                            }
                            else {
                                _this.presentToast(response.msg);
                            }
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.removeOffer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'bubbles'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.server.removeOffer(id, localStorage.getItem('cart_no') + "?lid=" + localStorage.getItem('lid')).subscribe(function (response) {
                            _this.data = response.data;
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.checkout = function () {
        if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != "null") {
            localStorage.setItem('checkout_data', JSON.stringify(this.data));
            this.nav.navigateForward('/checkout');
        }
        else {
            this.nav.navigateForward('/login');
            this.presentToast("Please login for continue");
        }
    };
    CartPage.prototype.writeNote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: note_page_1.NotePage,
                            animated: true,
                            mode: 'ios',
                            cssClass: 'my-custom-modal-css',
                            backdropDismiss: true,
                            swipeToClose: true,
                            breakpoints: [0, 0.3, 0.5, 0.5],
                            initialBreakpoint: 0.3
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.notes) {
                                _this.notes = data.data.notes;
                                localStorage.setItem("cooking_notes", _this.notes);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartPage.prototype.removeNotes = function () {
        this.notes = null;
        localStorage.removeItem("cooking_notes");
    };
    CartPage = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: 'cart.page.html',
            styleUrls: ['cart.page.scss']
        })
    ], CartPage);
    return CartPage;
}());
exports.CartPage = CartPage;
