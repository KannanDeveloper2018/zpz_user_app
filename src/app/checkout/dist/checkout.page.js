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
exports.CheckoutPage = void 0;
var core_1 = require("@angular/core");
var ngx_1 = require("@ionic-native/paypal/ngx");
var payment_page_1 = require("../payment/payment.page");
var select_address_page_1 = require("../select-address/select-address.page");
var tip_page_1 = require("../tip/tip.page");
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(alertController, routerOutlet, modalController, iab, route, server, toastController, nav, loadingController, stripe, payPal) {
        var _this = this;
        this.alertController = alertController;
        this.routerOutlet = routerOutlet;
        this.modalController = modalController;
        this.iab = iab;
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.stripe = stripe;
        this.payPal = payPal;
        /*Stripe Config & Payment*/
        this.stripeView = false;
        this.revisit = false;
        this.discount = 0;
        this.r = false;
        this.otype = 1;
        this.odate = 1;
        this.address = [];
        this.hasEcash = false;
        this.ecash = 0;
        this.wallet = 0;
        this.cod = true;
        this.tip = 0;
        this.data = JSON.parse(localStorage.getItem('checkout_data'));
        this.setting = JSON.parse(localStorage.getItem('setting'));
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.stripe_id = this.setting.stripe_key;
        this.razor_id = this.setting.razor_key;
        this.cod = this.setting.cod == 0 ? true : false;
        this.getDate();
        this.publicKey = this.setting.fw_key;
        this.meta = { 'counsumer_id': this.setting.fw_ci, 'consumer_mac': this.setting.fw_mac };
        this.customizations = { title: 'New Order', description: 'Food Delivery App Payment', logo: 'https://dicont.s3.amazonaws.com/static/flow-logos/flutterwave-logo.png' };
        this.route.queryParams.subscribe(function (params) {
            console.log(JSON.stringify(params));
            _this.addressName = ((params === null || params === void 0 ? void 0 : params.address) != undefined || null) ? params === null || params === void 0 ? void 0 : params.address : '';
        });
    }
    CheckoutPage.prototype.getTotal = function () {
        if (this.otype == 2) {
            return (this.data.total - this.data.d_charges) + (this.tip * 1);
        }
        else {
            return (this.data.total) + (this.tip * 1);
        }
    };
    CheckoutPage.prototype.totalPayable = function () {
        return (this.getTotal() - this.ecash) + (this.tip * 1);
    };
    CheckoutPage.prototype.getDate = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.todayDate = today;
        console.log(this.todayDate);
    };
    CheckoutPage.prototype.ngOnInit = function () {
    };
    CheckoutPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    CheckoutPage.prototype.loadData = function () {
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
                        // await loading.present();
                        console.log('loadingggggggg');
                        this.server.userInfo(localStorage.getItem('user_id'), this.data.data[0].store_id, localStorage.getItem('cart_no')).subscribe(function (response) {
                            _this.address = response.address;
                            _this.user = response.data;
                            _this.wallet = _this.user.wallet;
                            _this.api = response.api;
                            _this.dates = response.dates;
                            _this.times = response.times;
                            _this.tips = response.tip;
                            _this.customerDetails = { name: _this.user.name, email: _this.user.email, phone_number: _this.user.phone };
                            localStorage.setItem("years", JSON.stringify(response.year));
                            if (response.stock == false) {
                                _this.presentToast(_this.text.out_stock_msg_checkout);
                                _this.nav.navigateBack('/cart');
                            }
                            if (response.store.delivery_by == 1) {
                                _this.cod = response.store.cod == 1 ? true : false;
                            }
                            if (response.store.stripe_key) {
                                _this.stripe_id = response.store.stripe_key;
                            }
                            if (response.store.razor_key) {
                                _this.razor_id = response.store.razor_key;
                            }
                            loading.dismiss();
                        }, function (err) {
                            console.log(err);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.setAddress = function (a) {
        var _this = this;
        console.log("Address::::" + JSON.stringify(a));
        this.address_id = a.id;
        this.addressName = a.address;
        localStorage.setItem("current_lat", a.lat);
        localStorage.setItem("current_lng", a.lng);
        this.presentToast(this.text.d_charge_msg);
        this.server.getCart(localStorage.getItem('cart_no')).subscribe(function (response) {
            _this.data = response.data;
        }, function (err) { return console.log(err); });
    };
    CheckoutPage.prototype.book = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, allData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'bubbles',
                            duration: 3000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        allData = {
                            payment: this.payment,
                            cart_no: localStorage.getItem('cart_no'),
                            payment_id: this.payment_id,
                            otype: this.otype,
                            odate: this.odate,
                            order_date: this.order_date,
                            order_time: this.order_time,
                            user_id: localStorage.getItem('user_id'),
                            address: this.address_id,
                            ecash: this.ecash,
                            comment: localStorage.getItem('cooking_notes'),
                            tip: this.tip
                        };
                        this.server.order(allData).subscribe(function (response) {
                            localStorage.setItem('order_data', JSON.stringify(response.data));
                            localStorage.removeItem("cooking_notes");
                            _this.nav.navigateRoot('/detail/' + response.data.data.id);
                            if (_this.data.store.whatsapp_new_order == 0) {
                                _this.presentAlertConfirm(response.data.data.id);
                            }
                            loading.dismiss();
                        }, function (err) { return loading.dismiss(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.presentAlertConfirm = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            mode: 'ios',
                            header: 'Order Placed Successfully',
                            message: 'You can send a copy of this order to the store`s whatsapp number if you want to ask them order status or delivery time.',
                            buttons: [
                                {
                                    text: 'Send',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.nav.navigateRoot('/detail/' + id);
                                        _this.sendWhatsapp();
                                    }
                                }, {
                                    text: 'Close',
                                    handler: function () {
                                        _this.nav.navigateRoot('/detail/' + id);
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
    CheckoutPage.prototype.sendWhatsapp = function () {
        var _a;
        var itemName = "Hi *" + this.data.store.name + "* Please note my order details.\n\n";
        itemName = itemName + "*Order ID* : " + "*" + ((_a = this.data) === null || _a === void 0 ? void 0 : _a.data[0].id) + "* \n\n";
        //items detail
        for (var i = 0; i < this.data.data.length; i++) {
            var name = this.data.data[i].qtyName ? this.data.data[i].qtyName : "";
            var price = this.data.data[i].price * this.data.data[i].qty;
            itemName = itemName + this.data.data[i].item + " - " + this.data.data[i].qty + " " + name + " - " + this.setting.currency + price + " \n\n";
            if (this.data.data[i].addon.length > 0) {
                for (var a = 0; a < this.data.data[i].addon.length; a++) {
                    itemName = itemName + "----" + this.data.data[i].addon[a].name + " - " + this.setting.currency + this.data.data[i].addon[a].price + "\n\n";
                }
            }
        }
        if (this.odate == 1) {
            var o_date_time = "Today";
        }
        else {
            var o_date_time = this.order_date + " " + this.order_time;
        }
        var order_type = this.otype == 1 ? "Delivery" : "Pickup";
        //other detail
        itemName = itemName + "*Order Type* : " + order_type;
        itemName = itemName + "\n\n*Order Delivery Date Time* : " + o_date_time;
        itemName = itemName + "\n\n*User Detail*";
        itemName = itemName + "\n*Name* : " + this.user.name;
        itemName = itemName + "\n*Phone* : " + this.user.phone;
        if (this.otype == 1) {
            itemName = itemName + "\n*Address* : " + this.addressName;
        }
        if (this.comment) {
            itemName = itemName + "\n*Notes* : " + this.comment;
        }
        if (this.payment == 1) {
            var pm = "Cash on Delivery";
        }
        else {
            var pm = "Online Paid (Transaction id : " + this.payment_id + ")";
        }
        itemName = itemName + "\n\n\n*Total Amount* : " + this.setting.currency + this.getTotal();
        if (this.otype == 1 && this.data.d_charges > 0) {
            itemName = itemName + "\n\n\n*Delivery Charges* : " + this.setting.currency + this.data.d_charges;
        }
        itemName = itemName + "\n\n*Payment Method* : " + pm;
        window.location.href = "https://wa.me/" + this.data.store.whatsapp + "?text=" + encodeURI(itemName);
    };
    CheckoutPage.prototype.makeOrder = function () {
        if (this.payment == 2) {
            this.payWithStripe();
        }
        else if (this.payment == 3) {
            this.payWithRazor();
        }
        else if (this.payment == 4) {
            this.payPaypal();
        }
        else if (this.payment == 5) {
            this.payStack();
        }
        else if (this.payment == 6) {
            this.makeFlutterPayment();
        }
        else {
            this.book();
        }
    };
    CheckoutPage.prototype.payWithStripe = function () {
        var _this = this;
        var cNo = this.card_no;
        if (cNo && cNo.length == 16 && this.exp_month.length == 2 && this.exp_year.length == 4 && this.cvv.length == 3) {
            this.stripe.setPublishableKey(this.stripe_id);
            var card_1 = {
                number: cNo,
                expMonth: this.exp_month,
                expYear: this.exp_year,
                cvc: this.cvv
            };
            var cardNo = false;
            var cvvCorrect = false;
            //validate card no
            this.stripe.validateCardNumber(cNo)
                .then(function (res) {
                _this.stripe.createCardToken(card_1)
                    .then(function (token) {
                    if (token.id) {
                        _this.makePayment(token.id, cNo);
                    }
                    else {
                        _this.presentToast(_this.text.card_no_validation);
                    }
                })["catch"](function (error) {
                    _this.presentToast(_this.text.stripe_config);
                });
            })["catch"](function (error) {
                _this.presentToast(_this.text.card_no_validation);
            });
        }
        else {
            this.presentToast(this.text.stripe_validation);
        }
    };
    CheckoutPage.prototype.makePayment = function (token, cNo) {
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
                        this.server.makeStripePayment("?token=" + token + "&amount=" + this.getTotal() + "&user_id=" + this.phone + '&store_id=' + this.data.data[0].store_id).subscribe(function (response) {
                            if (response.data == "done") {
                                _this.payment_id = response.id;
                                if (_this.payment_id) {
                                    _this.book();
                                }
                            }
                            else {
                                _this.presentToast(response.error);
                            }
                            loading.dismiss();
                        }, function (err) { return loading.dismiss(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.payWithRazor = function () {
        var _this = this;
        var options = {
            description: 'Pay Now',
            image: 'https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png',
            currency: this.setting.currency_code,
            key: this.razor_id,
            amount: this.getTotal() * 100,
            name: 'Food Order App',
            prefill: {
                email: this.name + "@google.com",
                contact: this.phone,
                name: this.name
            },
            theme: {
                color: '#2196f3'
            },
            modal: {
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        var successCallback = function (success) {
            _this.payment_id = success;
            if (_this.payment_id) {
                _this.book();
            }
        };
        var cancelCallback = function (error) {
            alert(error.description + ' (Error ' + error.code + ')');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    CheckoutPage.prototype.presentToast = function (txt) {
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
    CheckoutPage.prototype.allSet = function () {
        if (this.otype && this.odate) {
            if (this.totalPayable() > 0 && !this.payment) {
                return false;
            }
            if (this.otype == 1 && this.odate == 1 && this.address_id) {
                return true;
            }
            else if (this.otype == 2 && this.odate == 1) {
                return true;
            }
            else if (this.otype == 2 && this.odate == 2 && this.order_time && this.order_date) {
                return true;
            }
            else if (this.otype == 1 && this.odate == 2 && this.address_id && this.order_date && this.order_time) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    CheckoutPage.prototype.payPaypal = function () {
        var _this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: this.setting.paypal_id,
            PayPalEnvironmentSandbox: this.setting.paypal_id
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new ngx_1.PayPalConfiguration({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
                var payment = new ngx_1.PayPalPayment(_this.getTotal(), 'USD', 'Food Delivery App', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    _this.book();
                }, function () {
                    _this.presentToast(_this.text.paypal_fail);
                });
            }, function () {
                _this.presentToast(_this.text.paypal_wrong);
            });
        }, function () {
            _this.presentToast(_this.text.paypal_wrong);
        });
    };
    CheckoutPage.prototype.payStack = function () {
        var _this = this;
        var query = "?name=" + this.user.name + "&phone=" + this.user.phone + "&email=" + this.user.email + "&amount=" + this.getTotal();
        var paymetUrl = this.api + "/payStack" + query;
        var successUrl = this.api + "/payStackSuccess";
        var failUrl = this.api + "/payStackCancel";
        var browser = this.iab.create(paymetUrl, "_blank", { zoom: 'no', location: 'no', toolbar: 'no' });
        browser.on('loadstop').subscribe(function (event) {
            if (event.url === successUrl) {
                _this.book();
                browser.close();
            }
            else if (event.url === failUrl) {
                _this.presentToast(_this.text.pay_cancel);
                browser.close();
            }
        });
        browser.show();
    };
    CheckoutPage.prototype.getPaymentMethod = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: payment_page_1.PaymentPage,
                            animated: true,
                            mode: 'ios',
                            cssClass: 'my-custom-modal-css',
                            backdropDismiss: true,
                            swipeToClose: true,
                            presentingElement: this.routerOutlet.nativeEl,
                            componentProps: {
                                'total': this.getTotal(),
                                'wallet': this.wallet,
                                'user': this.user
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data) {
                                _this.payment = data.data.payment;
                                _this.hasEcash = data.data.hasEcash;
                                _this.card_no = data.data.card_no;
                                _this.exp_month = data.data.exp_month;
                                _this.exp_year = data.data.exp_year;
                                _this.cvv = data.data.cvv;
                                //if used ecash
                                if (_this.hasEcash == true) {
                                    if (_this.wallet > _this.getTotal()) {
                                        _this.ecash = _this.getTotal();
                                        _this.wallet = _this.wallet - _this.ecash;
                                    }
                                    else {
                                        _this.ecash = _this.wallet;
                                        _this.wallet = 0;
                                        console.log(_this.ecash);
                                    }
                                }
                                else {
                                    _this.wallet = _this.user.wallet;
                                    _this.ecash = 0;
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CheckoutPage.prototype.getAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: select_address_page_1.SelectAddressPage,
                            animated: true,
                            mode: 'ios',
                            cssClass: 'my-custom-modal-css',
                            backdropDismiss: true,
                            swipeToClose: true,
                            componentProps: {
                                'address': this.address
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data) {
                                _this.setAddress(data.data.address);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CheckoutPage.prototype.addTip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: tip_page_1.TipPage,
                            animated: true,
                            mode: 'ios',
                            cssClass: 'my-custom-modal-css',
                            backdropDismiss: true,
                            swipeToClose: true,
                            breakpoints: [0, 0.3, 0.5, 0.5],
                            initialBreakpoint: 0.2,
                            componentProps: {
                                'tips': this.tips
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data) {
                                _this.tip = data.data.tip;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CheckoutPage.prototype.removeTip = function () {
        this.tip = null;
    };
    CheckoutPage.prototype.makeFlutterPayment = function () {
        /*var paymentData: InlinePaymentOptions = {
        public_key: this.publicKey,
        tx_ref: "Ref_id_"+Math.floor(Math.random() * 2000000000) + 1,
        amount: this.getTotal(),
        currency: this.setting.currency_code,
        payment_options: 'card,ussd',
        redirect_url: '',
        meta: this.meta,
        customer: this.customerDetails,
        customizations: this.customizations,
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
        callbackContext: this
      }
    
        this.flutterwave.inlinePay(paymentData);*/
    };
    __decorate([
        core_1.ViewChild('content', { static: false })
    ], CheckoutPage.prototype, "content");
    CheckoutPage = __decorate([
        core_1.Component({
            selector: 'app-checkout',
            templateUrl: './checkout.page.html',
            styleUrls: ['./checkout.page.scss']
        })
    ], CheckoutPage);
    return CheckoutPage;
}());
exports.CheckoutPage = CheckoutPage;
