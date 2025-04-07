"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
exports.CityPage = void 0;

var core_1 = require("@angular/core");

var CityPage =
/** @class */
function () {
  function CityPage(route, server, toastController, nav, loadingController, geolocation, androidPermissions, // public diagnostic: Diagnostic,
  diagnostic, _GEO, // public locationAccuracy: LocationAccuracy,
  nativeGeocoder, platform, zone) {
    var _this = this;

    this.route = route;
    this.server = server;
    this.toastController = toastController;
    this.nav = nav;
    this.loadingController = loadingController;
    this.geolocation = geolocation;
    this.androidPermissions = androidPermissions;
    this.diagnostic = diagnostic;
    this._GEO = _GEO;
    this.nativeGeocoder = nativeGeocoder;
    this.platform = platform;
    this.zone = zone;
    this.text = JSON.parse(localStorage.getItem('app_text'));
    this.type = this.route.snapshot.paramMap.get('id');
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = {
      input: ''
    };
    this.autocompleteItems = [];
    this.intr = setInterval(function () {
      _this.checkperm();
    }, 3000);
  }

  CityPage.prototype.ngOnInit = function () {};

  CityPage.prototype.ionViewWillLeave = function () {
    clearInterval(this.intr);
  };

  CityPage.prototype.ionViewWillEnter = function () {
    var _this = this;

    this.platform.ready().then(function () {
      _this.loadMap();
    });
  };

  CityPage.prototype.checkperm = function () {
    var _this = this;

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
      if (result.hasPermission) {
        _this.loadMap();

        clearInterval(_this.intr);
      }
    }, function (err) {
      
    });
  };

  CityPage.prototype.loadMap = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        console.log("hey--city"); 
        this.diagnostic.isLocationEnabled().then(function (isEnabled) {
          if (!isEnabled && _this.platform.is('cordova')) {
            _this.diagnostic.switchToLocationSettings();
          } else {
            _this.getPos();
          }
        });
        this.getPos();
        return [2
        /*return*/
        ];
      });
    });
  };

  CityPage.prototype.getPos = function () {
    var _this = this;

    this.geolocation.getCurrentPosition().then(function (resp) {
      var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      var mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      _this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);

      _this.map.addListener('tilesloaded', function () {
        _this.getAddressFromCoords(_this.map.center.lat(), _this.map.center.lng());
      });
    })["catch"](function (error) {
      // alert(error);
      console.log('Error getting location', error);
    });
  };

  CityPage.prototype.getAddressFromCoords = function (lattitude, longitude) {
    return __awaiter(this, void 0, void 0, function () {
      var options;

      var _this = this;

      return __generator(this, function (_a) {
        alert(lattitude);
        console.log("getAddressFromCoords " + lattitude + " " + longitude);
        options = {
          useLocale: true,
          maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(function (result) {
          _this.address = "";
          var responseAddress = [];

          for (var _i = 0, _a = Object.entries(result[0]); _i < _a.length; _i++) {
            var _b = _a[_i],
                key = _b[0],
                value = _b[1];
            if (value.length > 0) responseAddress.push(value);
          }

          responseAddress.reverse();

          for (var _c = 0, responseAddress_1 = responseAddress; _c < responseAddress_1.length; _c++) {
            var value = responseAddress_1[_c];
            _this.address += value + ", ";
          }

          _this.address = _this.address.slice(0, -2);
        })["catch"](function (error) {});
        return [2
        /*return*/
        ];
      });
    });
  };

  CityPage.prototype.saveAddress = function (data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        localStorage.setItem('current_lat', this.map.center.lat());
        localStorage.setItem('current_lng', this.map.center.lng());
        localStorage.setItem('current_add', data.address);
        this.nav.navigateRoot('home');
        return [2
        /*return*/
        ];
      });
    });
  };

  CityPage.prototype.presentToast = function (txt) {
    return __awaiter(this, void 0, void 0, function () {
      var toast;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.toastController.create({
              message: txt,
              duration: 3000,
              position: 'top',
              mode: 'ios',
              color: 'dark'
            })];

          case 1:
            toast = _a.sent();
            toast.present();
            return [2
            /*return*/
            ];
        }
      });
    });
  }; //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.


  CityPage.prototype.UpdateSearchResults = function () {
    var _this = this;

    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions({
      input: this.autocomplete.input
    }, function (predictions, status) {
      _this.autocompleteItems = [];

      _this.zone.run(function () {
        predictions.forEach(function (prediction) {
          _this.autocompleteItems.push(prediction);
        });
      });
    });
  }; //wE CALL THIS FROM EACH ITEM.


  CityPage.prototype.SelectSearchResult = function (item) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    var geocoder = new google.maps.Geocoder();
    var infowindow = new google.maps.InfoWindow();
    this.placeid = item.place_id;
    this.geocodePlaceId(geocoder, this.map, infowindow);
    this.ClearAutocomplete();
  };

  CityPage.prototype.geocodePlaceId = function (geocoder, map, infowindow) {
    var _this = this;

    geocoder.geocode({
      placeId: this.placeid
    }, function (results, status) {
      if (status === "OK") {
        if (results[0]) {
          _this.map.setZoom(16);

          _this.map.setCenter(results[0].geometry.location);
        } else {
          window.alert("No results found");
        }
      } else {
        window.alert("Geocoder failed due to: " + status);
      }
    });
  }; //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.


  CityPage.prototype.ClearAutocomplete = function () {
    this.autocompleteItems = [];
    this.autocomplete.input = '';
  };

  __decorate([core_1.ViewChild('map', {
    "static": false
  })], CityPage.prototype, "mapElement");

  CityPage = __decorate([core_1.Component({
    selector: 'app-city',
    templateUrl: './city.page.html',
    styleUrls: ['./city.page.scss']
  })], CityPage);
  return CityPage;
}();

exports.CityPage = CityPage;