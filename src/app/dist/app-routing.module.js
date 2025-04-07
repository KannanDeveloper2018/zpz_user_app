"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        redirectTo: 'lang',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./folder/folder.module'); }).then(function (m) { return m.FolderPageModule; }); }
    },
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./home/home.module'); }).then(function (m) { return m.HomePageModule; }); }
    },
    {
        path: 'about',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./about/about.module'); }).then(function (m) { return m.AboutPageModule; }); }
    },
    {
        path: 'faq',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./faq/faq.module'); }).then(function (m) { return m.FaqPageModule; }); }
    },
    {
        path: 'contact',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./contact/contact.module'); }).then(function (m) { return m.ContactPageModule; }); }
    },
    {
        path: 'account',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./account/account.module'); }).then(function (m) { return m.AccountPageModule; }); }
    },
    {
        path: 'done',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./done/done.module'); }).then(function (m) { return m.DonePageModule; }); }
    },
    {
        path: 'checkout',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./checkout/checkout.module'); }).then(function (m) { return m.CheckoutPageModule; }); }
    },
    {
        path: 'my',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./my/my.module'); }).then(function (m) { return m.MyPageModule; }); }
    },
    {
        path: 'lang',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./lang/lang.module'); }).then(function (m) { return m.LangPageModule; }); }
    },
    {
        path: 'city',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./city/city.module'); }).then(function (m) { return m.CityPageModule; }); }
    },
    {
        path: 'item/:id/:type',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./item/item.module'); }).then(function (m) { return m.ItemPageModule; }); }
    },
    {
        path: 'option',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./option/option.module'); }).then(function (m) { return m.OptionPageModule; }); }
    },
    {
        path: 'offer',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./offer/offer.module'); }).then(function (m) { return m.OfferPageModule; }); }
    },
    {
        path: 'info',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./info/info.module'); }).then(function (m) { return m.InfoPageModule; }); }
    },
    {
        path: 'search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./search/search.module'); }).then(function (m) { return m.SearchPageModule; }); }
    },
    {
        path: 'cart',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./cart/cart.module'); }).then(function (m) { return m.CartPageModule; }); }
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'signup',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./signup/signup.module'); }).then(function (m) { return m.SignupPageModule; }); }
    },
    {
        path: 'forgot',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./forgot/forgot.module'); }).then(function (m) { return m.ForgotPageModule; }); }
    },
    {
        path: 'address',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./address/address.module'); }).then(function (m) { return m.AddressPageModule; }); }
    },
    {
        path: 'rate/:oid',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./rate/rate.module'); }).then(function (m) { return m.RatePageModule; }); }
    },
    {
        path: 'setting',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./setting/setting.module'); }).then(function (m) { return m.SettingPageModule; }); }
    },
    {
        path: 'detail/:id',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./detail/detail.module'); }).then(function (m) { return m.DetailPageModule; }); }
    },
    {
        path: 'welcome',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./welcome/welcome.module'); }).then(function (m) { return m.WelcomePageModule; }); }
    },
    {
        path: 'menu',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./menu/menu.module'); }).then(function (m) { return m.MenuPageModule; }); }
    },
    {
        path: 'note',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./note/note.module'); }).then(function (m) { return m.NotePageModule; }); }
    },
    {
        path: 'payment',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./payment/payment.module'); }).then(function (m) { return m.PaymentPageModule; }); }
    },
    {
        path: 'select-address',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./select-address/select-address.module'); }).then(function (m) { return m.SelectAddressPageModule; }); }
    },
    {
        path: 'tip',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./tip/tip.module'); }).then(function (m) { return m.TipPageModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
