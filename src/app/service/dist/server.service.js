"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServerService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ServerService = /** @class */ (function () {
    function ServerService(http) {
        this.http = http;
        //put /api/ after your url e.g https://www.abc.com/api/
        this.url = "https://www.abcd.in/admin/api/";
    }
    ServerService.prototype.welcome = function () {
        return this.http.get(this.url + 'welcome')
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.homepage = function (id, type) {
        if (localStorage.getItem('temp_user_id') && localStorage.getItem('temp_user_id') != undefined) {
            var temp = localStorage.getItem('temp_user_id');
        }
        else {
            var temp = Math.floor(Math.random() * 2000000000) + 1;
            localStorage.setItem('temp_user_id', temp);
        }
        return this.http.get(this.url + 'homepage?lid=' + localStorage.getItem('lid') + "&user_id=" + localStorage.getItem('user_id') + "&city_id=" + localStorage.getItem('city_id') + "&cate_id=" + id + '&cart_no=' + localStorage.getItem('cart_no') + "&lat=" + localStorage.getItem("current_lat") + "&lng=" + localStorage.getItem("current_lng") + "&store_type=" + type + "&temp_user_id=" + temp)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.item = function (id) {
        if (localStorage.getItem('temp_user_id') && localStorage.getItem('temp_user_id') != undefined) {
            var temp = localStorage.getItem('temp_user_id');
        }
        else {
            var temp = Math.floor(Math.random() * 2000000000) + 1;
            localStorage.setItem('temp_user_id', temp);
        }
        return this.http.get(this.url + 'item?lid=' + localStorage.getItem('lid') + "&user_id=" + localStorage.getItem('user_id') + "&store_id=" + id + "&lat=" + localStorage.getItem("current_lat") + "&lng=" + localStorage.getItem("current_lng") + "&temp_user_id=" + temp)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.city = function () {
        return this.http.get(this.url + 'city?lid=' + localStorage.getItem('lid'))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.page = function () {
        return this.http.get(this.url + 'page?lid=' + localStorage.getItem('lid'))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.makeStripePayment = function (data) {
        return this.http.get(this.url + 'makeStripePayment' + data + '&lid=' + localStorage.getItem('lid'))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.my = function (id) {
        return this.http.get(this.url + 'my?id=' + id + '&lid=' + localStorage.getItem('lid'))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.getLang = function (id) {
        return this.http.get(this.url + 'getLang?lang_id=' + id)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.addToCart = function (data) {
        return this.http.post(this.url + 'addToCart?lang_id=' + localStorage.getItem('lid'), data)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.cartCount = function (id) {
        return this.http.get(this.url + 'cartCount?lid=' + localStorage.getItem('lid') + "&cart_no=" + id)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.updateCart = function (id, type) {
        console.log(type + "-=-=-=-");
        return this.http.get(this.url + 'updateCart/' + id + '/' + type)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.getCart = function (cartNo) {
        console.log(cartNo + "-----getCart");
        return this.http.get(this.url + 'getCart/' + cartNo + '?lid=' + localStorage.getItem('lid') + "&lat=" + localStorage.getItem("current_lat") + "&lng=" + localStorage.getItem("current_lng"))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.getOffer = function (cartNo) {
        return this.http.get(this.url + 'getOffer/' + cartNo + '?lid=' + localStorage.getItem('lid'))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.applyCoupen = function (id, cartNo) {
        return this.http.get(this.url + 'applyCoupen/' + id + '/' + cartNo + "&lat=" + localStorage.getItem("current_lat") + "&lng=" + localStorage.getItem("current_lng"))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.removeOffer = function (id, cartNo) {
        return this.http.get(this.url + 'removeOffer/' + id + '/' + cartNo + "&lat=" + localStorage.getItem("current_lat") + "&lng=" + localStorage.getItem("current_lng"))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.order = function (data) {
        return this.http.post(this.url + 'order' + "?lat=" + localStorage.getItem("current_lat") + "&lng=" + localStorage.getItem("current_lng"), data)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.login = function (data) {
        return this.http.post(this.url + 'login', data)
            .pipe(operators_1.map(function (results) { return results; }));
        var formdata = new FormData();
        // return this.http.post(`https://www.abcd.in/admin/appapi/userlogin.php?phone=${data.phone}&password=${data.password}`, formdata)
        // .pipe(map(result => result));
    };
    ServerService.prototype.signup = function (data) {
        return this.http.post(this.url + 'signup', data)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.forgot = function (data) {
        return this.http.post(this.url + 'forgot', data)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.forgetPassword = function (data) {
        var formdata = new FormData();
        return this.http.post("https://www.abcd.in/admin/appapi/forgetpassword.php?number=" + data.number, formdata)
            .pipe(operators_1.map(function (result) { return result; }));
    };
    ServerService.prototype.joiningBonus = function (user_id) {
        return this.http.get("https://www.abcd.in/admin/appapi/joiningbonus.php?user_id=" + user_id)
            .pipe(operators_1.map(function (result) { return result; }));
    };
    ServerService.prototype.verify = function (data) {
        return this.http.post(this.url + 'verify', data)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.updatePassword = function (data) {
        return this.http.post(this.url + 'updatePassword', data)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.userInfo = function (id, sid, cart_no) {
        if (sid === void 0) { sid = 0; }
        if (cart_no === void 0) { cart_no = 0; }
        return this.http.get(this.url + 'userInfo?id=' + id + '&store_id=' + sid + '&cart_no=' + cart_no)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.saveAddress = function (data) {
        return this.http.post(this.url + 'saveAddress', data)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.cancelOrder = function (id) {
        return this.http.get(this.url + 'cancelOrder?id=' + id + '&lid=' + localStorage.getItem('lid'))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.rating = function (data) {
        return this.http.post(this.url + 'rating', data)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.updateInfo = function (data, id) {
        return this.http.post(this.url + 'updateInfo?id=' + id, data)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.runningOrder = function () {
        return this.http.get(this.url + 'runningOrder?id=' + localStorage.getItem('user_id'))
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.orderDetail = function (id) {
        return this.http.get(this.url + 'orderDetail?lid=' + localStorage.getItem('lid') + '&order_id=' + id)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.getSearch = function (id) {
        return this.http.get(this.url + 'getSearch?lid=' + localStorage.getItem('lid') + '&item_id=' + id)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype.verifyUser = function (id) {
        return this.http.get(this.url + 'verifyUser?id=' + id)
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService.prototype["delete"] = function () {
        return this.http.get(this.url + 'userInfo?id=' + localStorage.getItem('lid') + "&type=delete")
            .pipe(operators_1.map(function (results) { return results; }));
    };
    ServerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServerService);
    return ServerService;
}());
exports.ServerService = ServerService;
