"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, oneSignal, nav) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.oneSignal = oneSignal;
        this.nav = nav;
        this.selectedIndex = 0;
        this.dir = 'ltr';
        if (localStorage.getItem('setting') && localStorage.getItem('setting') != undefined) {
            this.setting = JSON.parse(localStorage.getItem('setting'));
        }
        this.initializeApp();
        /*if(localStorage.getItem('lang_data') && localStorage.getItem('lang_data') != 'null')
        {
          if(localStorage.getItem('current_lat') && localStorage.getItem('current_lat') != 'null')
          {
            this.nav.navigateRoot('/home');
          }
          else
          {
            this.nav.navigateRoot('/city');
          }
        }
        else
        {
          this.nav.navigateRoot('/welcome');
        }*/
        /*
        ********************************************
        **Setup language
        ********************************************
        */
        if (localStorage.getItem('lang_data') && localStorage.getItem('lang_data') != undefined) {
            this.lang_data = JSON.parse(localStorage.getItem('lang_data'));
            this.dir = this.lang_data.type == '1' ? 'rtl' : 'ltr';
            console.log(this.lang_data);
        }
        if (localStorage.getItem('app_text') && localStorage.getItem('app_text') != undefined) {
            this.text = JSON.parse(localStorage.getItem('app_text'));
            this.appPages = [
                {
                    title: this.text.menu_home,
                    url: '/home',
                    icon: 'home'
                },
                {
                    title: this.text.running_order,
                    url: '/done',
                    icon: 'stats-chart'
                },
                {
                    title: this.text.account_title,
                    url: '/account',
                    icon: 'person'
                },
                {
                    title: this.text.menu_lang,
                    url: '/lang',
                    icon: 'flag'
                },
                {
                    title: this.text.menu_location,
                    url: '/city',
                    icon: 'location'
                },
                {
                    title: this.text.menu_about,
                    url: '/about',
                    icon: 'information-circle'
                },
                {
                    title: this.text.menu_faq,
                    url: '/faq',
                    icon: 'create'
                },
                {
                    title: this.text.menu_contact,
                    url: '/contact',
                    icon: 'mail'
                },
            ];
        }
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            //this.splashScreen.hide();
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#f4f5f8');
            _this.statusBar.styleDefault();
            if (_this.setting) {
                _this.sub();
            }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user_data') && localStorage.getItem('user_data') != undefined && localStorage.getItem('user_data') != 'null') {
            this.userData = JSON.parse(localStorage.getItem('user_data'));
        }
        var path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) { return page.title.toLowerCase() === path.toLowerCase(); });
        }
    };
    AppComponent.prototype.sub = function () {
        this.oneSignal.startInit(this.setting.push_app_id, this.setting.push_google);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function () {
            // do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(function () {
            // do something when a notification is opened
        });
        if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != undefined) {
            this.oneSignal.sendTags({ user_id: localStorage.getItem('user_id') });
        }
        this.oneSignal.endInit();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
