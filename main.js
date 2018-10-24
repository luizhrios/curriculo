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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _conhecimentos_conhecimentos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conhecimentos/conhecimentos.component */ "./src/app/conhecimentos/conhecimentos.component.ts");
/* harmony import */ var _formacao_formacao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formacao/formacao.component */ "./src/app/formacao/formacao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'conhecimentos', component: _conhecimentos_conhecimentos_component__WEBPACK_IMPORTED_MODULE_2__["ConhecimentosComponent"] },
    { path: 'formacaoacademica', component: _formacao_formacao_component__WEBPACK_IMPORTED_MODULE_3__["FormacaoComponent"] }
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse center\" id=\"navbar\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"conhecimentos\">Conhecimentos</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"formacaoacademica\">Formação Acadêmica</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" disabled>Contato</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<app-main></app-main>\n<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'curriculo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _conhecimentos_conhecimentos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conhecimentos/conhecimentos.component */ "./src/app/conhecimentos/conhecimentos.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _formacao_formacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formacao/formacao.component */ "./src/app/formacao/formacao.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _conhecimentos_conhecimentos_component__WEBPACK_IMPORTED_MODULE_3__["ConhecimentosComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _formacao_formacao_component__WEBPACK_IMPORTED_MODULE_6__["FormacaoComponent"],
                _contato_contato_component__WEBPACK_IMPORTED_MODULE_7__["ContatoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/conhecimentos/conhecimentos.component.css":
/*!***********************************************************!*\
  !*** ./src/app/conhecimentos/conhecimentos.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/conhecimentos/conhecimentos.component.html":
/*!************************************************************!*\
  !*** ./src/app/conhecimentos/conhecimentos.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card mb-4\">\n        <h3 class=\"card-header\">Java</h3>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Java, Java Web e Android.</h5>\n        </div>\n        <img style=\"height: 225px; width: 100%; display: block; max-width: 225px; margin:auto\" src=\"assets/logos/java.png\" alt=\"Card image\">\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card mb-4\">\n        <h3 class=\"card-header\">.NET</h3>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">.NET - VB.Net e C#.</h5>\n        </div>\n        <img style=\"height: 225px; width: 100%; display: block; max-width: 225px; margin:auto\" src=\"assets/logos/net.png\" alt=\"Card image\">\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card mb-4\">\n        <h3 class=\"card-header\">Xamarin</h3>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Android</h5>\n        </div>\n        <img style=\"height: 225px; width: 100%; display: block; max-width: 225px; margin:auto\" src=\"assets/logos/xamarin.png\" alt=\"Card image\">\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card mb-4\">\n        <h3 class=\"card-header\">PHP</h3>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">.NET - VB.Net e C#.</h5>\n        </div>\n        <img style=\"height: 225px; width: 100%; display: block; max-width: 225px; margin:auto\" src=\"assets/logos/php.png\" alt=\"Card image\">\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card mb-4\">\n        <h3 class=\"card-header\">SQL</h3>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">SQL Server, MySQL, PostgreSQL</h5>\n        </div>\n        <img style=\"height: 225px; width: 100%; display: block; max-width: 225px; margin:auto\" src=\"assets/logos/sql.png\" alt=\"Card image\">\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card mb-4\">\n        <h3 class=\"card-header\">SO</h3>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Windows e Linux</h5>\n        </div>\n        <img style=\"height: 225px; width: 100%; display: block; max-width: 225px; margin:auto\" src=\"assets/logos/linux_windows_logos.png\" alt=\"Card image\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/conhecimentos/conhecimentos.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/conhecimentos/conhecimentos.component.ts ***!
  \**********************************************************/
/*! exports provided: ConhecimentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConhecimentosComponent", function() { return ConhecimentosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConhecimentosComponent = /** @class */ (function () {
    function ConhecimentosComponent() {
        this.texto = 'Qualquer coisa';
    }
    ConhecimentosComponent.prototype.ngOnInit = function () {
    };
    ConhecimentosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conhecimentos',
            template: __webpack_require__(/*! ./conhecimentos.component.html */ "./src/app/conhecimentos/conhecimentos.component.html"),
            styles: [__webpack_require__(/*! ./conhecimentos.component.css */ "./src/app/conhecimentos/conhecimentos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConhecimentosComponent);
    return ConhecimentosComponent;
}());



/***/ }),

/***/ "./src/app/contato/contato.component.css":
/*!***********************************************!*\
  !*** ./src/app/contato/contato.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contato/contato.component.html":
/*!************************************************!*\
  !*** ./src/app/contato/contato.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n</div>"

/***/ }),

/***/ "./src/app/contato/contato.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contato/contato.component.ts ***!
  \**********************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContatoComponent = /** @class */ (function () {
    function ContatoComponent() {
    }
    ContatoComponent.prototype.ngOnInit = function () {
    };
    ContatoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contato',
            template: __webpack_require__(/*! ./contato.component.html */ "./src/app/contato/contato.component.html"),
            styles: [__webpack_require__(/*! ./contato.component.css */ "./src/app/contato/contato.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContatoComponent);
    return ContatoComponent;
}());



/***/ }),

/***/ "./src/app/formacao/formacao.component.css":
/*!*************************************************!*\
  !*** ./src/app/formacao/formacao.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-text\r\n{\r\n    height: 50px;\r\n}"

/***/ }),

/***/ "./src/app/formacao/formacao.component.html":
/*!**************************************************!*\
  !*** ./src/app/formacao/formacao.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card mb-4 shadow-sm\">\n        <img class=\"card-img-top\" alt=\"Thumbnail [100%x225]\" style=\"height: 225px; width: 100%; max-width: 225px; display: block; margin: auto\" src=\"assets/logos/logo-ucsal.png\" data-holder-rendered=\"true\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Quinto Semestre em Bacharelado em Engenharia de Software na Universidade Católica do Salvador<br></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card mb-4 shadow-sm\">\n        <img class=\"card-img-top\" alt=\"Thumbnail [100%x225]\" style=\"height: 225px; width: 100%; max-width: 225px; display: block; margin: auto\" src=\"assets/logos/image.png\" data-holder-rendered=\"true\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Curso de Manipulação de banco de dados na Parallel.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/formacao/formacao.component.ts":
/*!************************************************!*\
  !*** ./src/app/formacao/formacao.component.ts ***!
  \************************************************/
/*! exports provided: FormacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormacaoComponent", function() { return FormacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormacaoComponent = /** @class */ (function () {
    function FormacaoComponent() {
    }
    FormacaoComponent.prototype.ngOnInit = function () {
    };
    FormacaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formacao',
            template: __webpack_require__(/*! ./formacao.component.html */ "./src/app/formacao/formacao.component.html"),
            styles: [__webpack_require__(/*! ./formacao.component.css */ "./src/app/formacao/formacao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormacaoComponent);
    return FormacaoComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\">Luiz Henrique Rios</h1>\n    <p class=\"lead\">Aluno de Bacharelado em Engenharia de Software e Desenvolvedor na Solutis Tecnologias.</p>\n    <hr class=\"my-4\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Luiz\Desktop\curriculo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map