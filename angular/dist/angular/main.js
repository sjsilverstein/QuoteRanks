(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author-list/author-list.component */ "./src/app/author-list/author-list.component.ts");
/* harmony import */ var _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-author/new-author.component */ "./src/app/new-author/new-author.component.ts");
/* harmony import */ var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-author/edit-author.component */ "./src/app/edit-author/edit-author.component.ts");
/* harmony import */ var _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-list/quote-list.component */ "./src/app/quote-list/quote-list.component.ts");
/* harmony import */ var _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-quote/new-quote.component */ "./src/app/new-quote/new-quote.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_2__["AuthorListComponent"] },
    { path: 'newAuthor', component: _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_3__["NewAuthorComponent"] },
    // use a colon and parameter name to include a parameter in the url
    { path: 'edit/:id', component: _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_4__["EditAuthorComponent"] },
    { path: 'author/quotes/:id', component: _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_5__["QuoteListComponent"] },
    { path: 'quotes/new/:id', component: _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_6__["NewQuoteComponent"] }
    // // the ** will catch anything that did not match any of the above routes
    // { path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"row text-align-center\">\n    <div class=\"col-2\"></div>\n    <div class=\"col-8\">\n        <h1>Welcome to {{ title }}!</h1>\n    </div>\n    <div class=\"col-2\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-1\">\n        <button [routerLink]=\"['/']\">Home</button>\n    </div>\n    <div class=\"col-2\">\n        <button [routerLink]=\"['/newAuthor']\">Add Author</button>\n    </div>\n  </div>\n  <br> \n  <router-outlet></router-outlet>\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'Quote Ranks';
        this.getAuthors();
    }
    AppComponent.prototype.getAuthors = function () {
        var _this = this;
        console.log('Getting all of the Authors');
        var observable = this._httpService.getAuthors();
        observable.subscribe(function (data) {
            _this.authors = data['authors'];
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this._router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./author-list/author-list.component */ "./src/app/author-list/author-list.component.ts");
/* harmony import */ var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-author/edit-author.component */ "./src/app/edit-author/edit-author.component.ts");
/* harmony import */ var _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-author/new-author.component */ "./src/app/new-author/new-author.component.ts");
/* harmony import */ var _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quote-list/quote-list.component */ "./src/app/quote-list/quote-list.component.ts");
/* harmony import */ var _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-quote/new-quote.component */ "./src/app/new-quote/new-quote.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_7__["AuthorListComponent"],
                _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_8__["EditAuthorComponent"],
                _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_9__["NewAuthorComponent"],
                _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_10__["QuoteListComponent"],
                _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_11__["NewQuoteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author-list/author-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/author-list/author-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-list/author-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/author-list/author-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h4>Author List:</h4>\n</div>\n<table>\n  <tr>\n    <th>Author</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let author of authors\">\n    <td>{{author.name}}</td>\n    <td>\n      <button [routerLink]=\"['/author/quotes/'+author._id]\">Quotes</button>\n      <button [routerLink]=\"['/edit/'+author._id]\">Edit</button>\n      <button (click)=\"deleteAuthor(author._id)\">Delete</button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/author-list/author-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/author-list/author-list.component.ts ***!
  \******************************************************/
/*! exports provided: AuthorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListComponent", function() { return AuthorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorListComponent = /** @class */ (function () {
    function AuthorListComponent(_httpService) {
        this._httpService = _httpService;
        this.getAuthors();
    }
    AuthorListComponent.prototype.ngOnInit = function () {
    };
    AuthorListComponent.prototype.getAuthors = function () {
        var _this = this;
        console.log("Get all the Authors");
        var observable = this._httpService.getAuthors();
        observable.subscribe(function (data) {
            console.log(data);
            _this.authors = data['authors'];
        });
    };
    AuthorListComponent.prototype.deleteAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.deleteAuthor(id);
        observable.subscribe(function (data) {
            _this.getAuthors();
        });
    };
    AuthorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-list',
            template: __webpack_require__(/*! ./author-list.component.html */ "./src/app/author-list/author-list.component.html"),
            styles: [__webpack_require__(/*! ./author-list.component.css */ "./src/app/author-list/author-list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AuthorListComponent);
    return AuthorListComponent;
}());



/***/ }),

/***/ "./src/app/edit-author/edit-author.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-author/edit-author.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"editAuthorForm()\" method=\"PUT\" *ngIf=\"author\">\n    <h4>Edit: {{author.name}}</h4>\n    name: <input type=\"text\" name=\"author.name\" [(ngModel)]=\"author.name\">\n    <input type=\"submit\" value=\"Make Edits\">\n</form>\n  "

/***/ }),

/***/ "./src/app/edit-author/edit-author.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.ts ***!
  \******************************************************/
/*! exports provided: EditAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAuthorComponent", function() { return EditAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditAuthorComponent = /** @class */ (function () {
    function EditAuthorComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
            _this.getAuthorService(_this.id);
        });
    };
    EditAuthorComponent.prototype.getAuthorService = function (id) {
        var _this = this;
        var obversable = this._httpService.getAuthorBy(this.id);
        obversable.subscribe(function (data) {
            _this.author = data;
        });
    };
    EditAuthorComponent.prototype.editAuthorForm = function () {
        var _this = this;
        var obversable = this._httpService.updateAuthor(this.author);
        obversable.subscribe(function (data) {
            console.log("Subscribed to Update Author Observable...");
            _this._router.navigate(['/']);
        });
    };
    EditAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-author',
            template: __webpack_require__(/*! ./edit-author.component.html */ "./src/app/edit-author/edit-author.component.html"),
            styles: [__webpack_require__(/*! ./edit-author.component.css */ "./src/app/edit-author/edit-author.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditAuthorComponent);
    return EditAuthorComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    //These routes match up with restful routing in the server / config / routing.js file.
    HttpService.prototype.getAuthors = function () {
        return this._http.get('/authors');
    };
    HttpService.prototype.getAuthorBy = function (id) {
        return this._http.get('/author/' + id);
    };
    HttpService.prototype.createAuthor = function (newAuthorData) {
        console.log(newAuthorData);
        return this._http.post('/authors', newAuthorData);
    };
    HttpService.prototype.deleteAuthor = function (id) {
        return this._http.delete('/authors/' + id);
    };
    HttpService.prototype.updateAuthor = function (data) {
        return this._http.put('/authors/edit/' + data._id, data);
    };
    HttpService.prototype.createQuote = function (newQuoteData) {
        console.log(newQuoteData);
        return this._http.put('/newQuoteBy/' + newQuoteData.author._id, newQuoteData.quote);
    };
    HttpService.prototype.updateQuote = function (data) {
        return this._http.put('/updateQuote/' + data.authorId, data.quote);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new-author/new-author.component.css":
/*!*****************************************************!*\
  !*** ./src/app/new-author/new-author.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-author/new-author.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-author/new-author.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h4>Add a New Author:</h4>\n  </div>\n  <form (submit)=\"newAuthorForm()\" method=\"POST\">\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <p>Name: </p>\n      </div>\n      <div class=\"col-4\">\n        <p *ngIf=\"errorL\">{{errorL.errors.name.message}}</p>\n        <input type=\"text\" name=\"newAuthor.name\" [(ngModel)]=\"newAuthor.name\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <input type=\"submit\" value=\"Add Author\">\n      </div>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/new-author/new-author.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-author/new-author.component.ts ***!
  \****************************************************/
/*! exports provided: NewAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAuthorComponent", function() { return NewAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewAuthorComponent = /** @class */ (function () {
    function NewAuthorComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.newAuthor = { name: "" };
        this.getAuthors();
    }
    NewAuthorComponent.prototype.ngOnInit = function () {
    };
    NewAuthorComponent.prototype.getAuthors = function () {
    };
    NewAuthorComponent.prototype.newAuthorForm = function () {
        var _this = this;
        var observable = this._httpService.createAuthor(this.newAuthor);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'errors') {
                _this.errorL = data['errors'];
                console.log(_this.errorL);
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    NewAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-author',
            template: __webpack_require__(/*! ./new-author.component.html */ "./src/app/new-author/new-author.component.html"),
            styles: [__webpack_require__(/*! ./new-author.component.css */ "./src/app/new-author/new-author.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewAuthorComponent);
    return NewAuthorComponent;
}());



/***/ }),

/***/ "./src/app/new-quote/new-quote.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-quote/new-quote.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-quote/new-quote.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-quote/new-quote.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"author\">\n  <div class=\"row\">\n    <h4>Provide a Quote by {{author.name}}</h4>\n  </div>\n    <form (submit)=\"newQuoteForm()\" method=\"PUT\">\n        <p *ngIf=\"errorL\">{{errorL['errors']['quotes']['errors']['content']['message']}}</p>\n        Quote: <input type=\"text\" name=\"newQuote.content\" [(ngModel)]=\"newQuote.content\">\n        <input type=\"submit\" value=\"Add Quote\">\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/new-quote/new-quote.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-quote/new-quote.component.ts ***!
  \**************************************************/
/*! exports provided: NewQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuoteComponent", function() { return NewQuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewQuoteComponent = /** @class */ (function () {
    function NewQuoteComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.newQuote = { content: '' };
    }
    NewQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.authorId = params['id'];
            _this.getAuthorService(_this.authorId);
        });
    };
    NewQuoteComponent.prototype.getAuthorService = function (id) {
        var _this = this;
        var obversable = this._httpService.getAuthorBy(this.authorId);
        obversable.subscribe(function (data) {
            _this.author = data;
        });
    };
    NewQuoteComponent.prototype.newQuoteForm = function () {
        var _this = this;
        var data = { author: this.author, quote: this.newQuote, };
        console.log(data);
        var observable = this._httpService.createQuote(data);
        observable.subscribe(function (data) {
            if (data['status'] == 'errors') {
                _this.errorL = data['errors'];
                console.log(_this.errorL);
                console.log(_this.errorL['errors']['quotes']['errors']['content']['message']);
            }
            else {
                _this._router.navigate(['/author/quotes/' + _this.authorId]);
            }
        });
    };
    NewQuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-quote',
            template: __webpack_require__(/*! ./new-quote.component.html */ "./src/app/new-quote/new-quote.component.html"),
            styles: [__webpack_require__(/*! ./new-quote.component.css */ "./src/app/new-quote/new-quote.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewQuoteComponent);
    return NewQuoteComponent;
}());



/***/ }),

/***/ "./src/app/quote-list/quote-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-list/quote-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quote-list/quote-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-list/quote-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div *ngIf=\"author\" class=\"row\">\n  <div class=\"col-3\">\n      <h4>{{author.name}}</h4>\n  </div>\n  <div class=\"col-3\">\n    <button [routerLink]=\"['/quotes/new/'+author._id]\">Add Quote by: {{author.name}}</button>\n  </div>\n</div>\n<div *ngIf=\"author\" class=\"row\">\n  <table>\n    <tr>\n      <th>Quote</th>\n      <th>Voters</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let quote of author.quotes\">\n      <td>{{quote.content}}</td>\n      <td>{{quote.votes}}</td>\n      <td>\n        <button (click)=\"upVoteQuote(quote)\">Up Vote</button>\n        <button (click)=\"downVoteQuote(quote)\">Down Vote</button>\n      </td>\n    </tr>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/quote-list/quote-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-list/quote-list.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteListComponent", function() { return QuoteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuoteListComponent = /** @class */ (function () {
    function QuoteListComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    QuoteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.authorId = params['id'];
            _this.getAuthorService(_this.authorId);
        });
    };
    QuoteListComponent.prototype.getAuthorService = function (id) {
        var _this = this;
        var obversable = this._httpService.getAuthorBy(this.authorId);
        obversable.subscribe(function (data) {
            _this.author = data;
            console.log(data);
        });
    };
    QuoteListComponent.prototype.upVoteQuote = function (quote) {
        console.log("UpVote");
        quote.votes++;
        var context = { authorId: this.authorId, quote: quote };
        var obversable = this._httpService.updateQuote(context);
        obversable.subscribe(function (data) {
            console.log(data);
        });
    };
    QuoteListComponent.prototype.downVoteQuote = function (quote) {
        console.log("DownVote");
        quote.votes--;
        var context = { authorId: this.authorId, quote: quote };
        var obversable = this._httpService.updateQuote(context);
        obversable.subscribe(function (data) {
            console.log(data);
        });
    };
    QuoteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-list',
            template: __webpack_require__(/*! ./quote-list.component.html */ "./src/app/quote-list/quote-list.component.html"),
            styles: [__webpack_require__(/*! ./quote-list.component.css */ "./src/app/quote-list/quote-list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuoteListComponent);
    return QuoteListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Silverstein\Documents\Repos\CodingDojo\MEAN\Angular\QuoteRanks\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map