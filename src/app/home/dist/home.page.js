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
exports.HomePage = void 0;
var core_1 = require("@angular/core");
var menu_page_1 = require("../menu/menu.page");
var HomePage = /** @class */ (function () {
    function HomePage(nativePageTransitions, actionSheetController, routerOutlet, modalController, activatedRoute, server, loadingController, alertController, platform, nav) {
        this.nativePageTransitions = nativePageTransitions;
        this.actionSheetController = actionSheetController;
        this.routerOutlet = routerOutlet;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.server = server;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.platform = platform;
        this.nav = nav;
        this.BannerOption = {
            initialSlide: 0,
            slidesPerView: 1,
            loop: true,
            centeredSlides: true,
            autoplay: false,
            speed: 500,
            spaceBetween: 0
        };
        this.CateOption = {
            initialSlide: 0,
            slidesPerView: 4.2,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            speed: 500,
            spaceBetween: 6
        };
        this.TrendOption = {
            initialSlide: 0,
            slidesPerView: 1.4,
            loop: true,
            centeredSlides: false,
            autoplay: false,
            speed: 500,
            spaceBetween: -10
        };
        this.RecoOption = {
            initialSlide: 0,
            slidesPerView: 2.1,
            loop: true,
            centeredSlides: false,
            autoplay: false,
            speed: 500,
            spaceBetween: -10
        };
        this.sl = [1, 2, 3, 4, 5];
        this.fakeData = [1, 2, 3, 4, 5, 6, 7];
        this.storeData = [];
        this.store_type = 0;
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.address = localStorage.getItem('current_add');
    }
    HomePage.prototype.ngOnInit = function () {
        this.loadData();
    };
    HomePage.prototype.cateData = function (cate) {
        this.cate_id = cate.id;
        this.cate_name = cate.name;
        this.data = null;
        this.loadData(cate.id);
    };
    HomePage.prototype.clearCate = function () {
        this.cate_id = null;
        this.cate_name = null;
        this.data = null;
        this.loadData();
    };
    HomePage.prototype.viewAll = function () {
        setTimeout(function () {
            var element = document.getElementById("store");
            element.scrollIntoView({ behavior: "smooth" });
        }, 200);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.platform.backButton.subscribe(function () {
            _this.presentAlertConfirm();
        });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    HomePage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.text.exit_app,
                            message: this.text.exit_app_desc,
                            buttons: [
                                {
                                    text: this.text.s_canceled_order,
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: this.text.exit_app_confirm,
                                    handler: function () {
                                        navigator['app'].exitApp();
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
    HomePage.prototype.setType = function (type) {
        this.storeData = [];
        this.store_type = type;
        for (var i = 0; i < this.data.store.length; i++) {
            if (this.store_type == 0) {
                if (this.data.store[i].delivery == 0) {
                    this.storeData.push(this.data.store[i]);
                }
            }
            else {
                if (this.data.store[i].dinein == 0) {
                    this.storeData.push(this.data.store[i]);
                }
            }
        }
        setTimeout(function () {
            var element = document.getElementById("store");
            element.scrollIntoView({ behavior: "smooth" });
        }, 200);
    };
    HomePage.prototype.loadData = function (id, load) {
        if (id === void 0) { id = 0; }
        if (load === void 0) { load = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.server.homepage(id, this.store_type).subscribe(function (response) {
                    _this.data = response.data;
                    _this.storeData = response.data.store;
                    _this.allData = response.data.store;
                    console.log(_this.data);
                    if (id > 0 && _this.data || load) {
                        setTimeout(function () {
                            var element = document.getElementById("store");
                            element.scrollIntoView({ behavior: "smooth" });
                        }, 200);
                    }
                    localStorage.setItem('app_text', JSON.stringify(response.data.text));
                    localStorage.setItem('setting', JSON.stringify(response.data.setting));
                    localStorage.setItem('country', JSON.stringify(response.data.country));
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.item = function (store) {
        if (store.open) {
            this.nav.navigateForward('/item/' + store.id + '/' + this.store_type);
        }
    };
    HomePage.prototype.search = function () {
        localStorage.setItem('trend_data', JSON.stringify(this.data.trend));
        localStorage.setItem('all_data', JSON.stringify(this.data.search_data));
        this.nav.navigateForward('/search');
    };
    HomePage.prototype.account = function () {
        if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != "null") {
            this.nav.navigateForward('/account');
        }
        else {
            this.nav.navigateForward('/login');
        }
    };
    HomePage.prototype.bannerLink = function (banner) {
        if (banner.link_to == 1) {
            this.nav.navigateForward('/item/' + banner.link_id);
        }
        else if (banner.link_to == 2) {
            this.data = null;
            this.loadData(banner.link_id);
        }
        else if (banner.link_to == 3) {
            window.open(banner.link_id, "_blank");
        }
    };
    HomePage.prototype.filterData = function (id) {
        //this.stores = this.storeData;
        this.filterPress = id;
        if (id == 0) {
            this.filterPress = null;
        }
        else if (id == 1) {
            this.filterName = this.text.rating;
            this.storeData.sort(function (a, b) {
                return parseFloat(b.rating) - parseFloat(a.rating);
            });
        }
        else if (id == 2) {
            this.filterName = this.text.nearest;
            this.storeData.sort(function (a, b) {
                return parseFloat(a.km) - parseFloat(b.km);
            });
        }
        else if (id == 3) {
            this.filterName = this.text.new_arrival;
            this.storeData.sort(function (a, b) {
                return parseFloat(b.id) - parseFloat(a.id);
            });
        }
        else {
            this.filterName = "Fastest Delivery";
            this.storeData.sort(function (a, b) {
                return parseFloat(a.dtime) - parseFloat(b.dtime);
            });
        }
        setTimeout(function () {
            if (id > 0) {
                var element = document.getElementById("store");
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };
    HomePage.prototype.doRefresh = function (event) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.loadData();
            event.target.complete();
        }, 2000);
    };
    HomePage.prototype.showMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: menu_page_1.MenuPage,
                            animated: true,
                            mode: 'ios',
                            cssClass: 'my-custom-modal-css',
                            backdropDismiss: true,
                            swipeToClose: true,
                            breakpoints: [1, 0.3, 0.5, 0.5],
                            initialBreakpoint: 1,
                            componentProps: {
                                'user': this.data.user
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data.logout) {
                                _this.loadData();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.presentActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet, _a, role, data;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Filter By',
                            cssClass: 'my-custom-class',
                            mode: 'md',
                            buttons: [{
                                    text: this.text.rating,
                                    role: 'destructive',
                                    icon: 'star-outline',
                                    id: 'delete-button',
                                    data: {
                                        type: 'delete'
                                    },
                                    handler: function () {
                                        _this.filterData(1);
                                    }
                                }, {
                                    text: this.text.nearest,
                                    icon: 'location-outline',
                                    data: 10,
                                    handler: function () {
                                        _this.filterData(2);
                                    }
                                }, {
                                    text: this.text.new_arrival,
                                    icon: 'checkmark-done-outline',
                                    data: 'Data value',
                                    handler: function () {
                                        _this.filterData(3);
                                    }
                                }, {
                                    text: 'Fastest Delivery',
                                    icon: 'rocket-outline',
                                    handler: function () {
                                        _this.filterData(4);
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _b.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, actionSheet.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('onDidDismiss resolved with role and data', role, data);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.ViewChild('content', { static: false })
    ], HomePage.prototype, "content");
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
