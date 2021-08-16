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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'app';
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
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
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
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imgCompany {\r\n    max-width: 100%;\r\n}\r\n\r\n#imgFounder {\r\n    max-width: 100%;\r\n}\r\n\r\n.jumbotron {\r\n    padding: 14rem 2rem;\r\n    margin-bottom: 2rem;\r\n    background-color: #e9ecef;\r\n    border-radius: .3rem;\r\n    background-image: url('solar-power1-2000px.55-min.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-position: 0px -9rem;\r\n}\r\n\r\n.card {\r\n    height: 20rem;\r\n    width: 25rem;\r\n    text-shadow: 0 1px 3px rgba(0,0,0,0.6);\r\n    background-size: cover !important;\r\n    color: white;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    margin-bottom: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n.container > p {\r\n    color: white;\r\n}\r\n\r\n.primaryColor {\r\n    background-color: #041533;\r\n    color: white;\r\n}\r\n\r\n.display-3 {\r\n    color: #ffae00;\r\n    font-size: 6rem;\r\n    font-family: \"Anton-Regular\";\r\n}\r\n\r\n.jumbo-text {\r\n    font-size: 3.5rem;\r\n    font-family: \"Fenix-Regular\";\r\n}\r\n\r\n.secondaryColor {\r\n    background-color: #ffae00;\r\n}\r\n\r\n.terciaryColor {\r\n    background-color: #808080;\r\n}\r\n\r\nh5, h4 {\r\n    font-family: \"Fenix-Regular\";\r\n}\r\n\r\nh1, h2, h3, b {\r\n    font-family: \"Fenix-Regular\";\r\n}\r\n\r\n.jumbotron > p {\r\n    color: white;\r\n}\r\n\r\na {\r\n    color: white !important;\r\n}\r\n\r\na.nav-link {\r\n    font-size: 1.3rem !important;\r\n    font-family: \"Fenix-Regular\";\r\n}\r\n\r\na.nav-link :hover {\r\n    color: #ffae00 !important;\r\n}\r\n\r\n.navbar-center > img {\r\n    max-width: 75px;\r\n    max-height: 75px;\r\n    margin-left: 34vw;\r\n}\r\n\r\nfooter > p {\r\n    display: inline;\r\n    margin-left: 10px;\r\n    font-family: \"Fenix-Regular\";\r\n}\r\n\r\nfooter {\r\n    max-width: 100%;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg primaryColor\">\n  <div class=\"container-fluid\">\n    &nbsp;<a class=\"navbar-center\" href=\"#\"><img src=\"assets/logos/logo_branco.png\" alt=\"\"></a>\n  \n  <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#mainMenu\" aria-controls=\"mainMenu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"primaryColor collapse navbar-collapse\" id=\"mainMenu\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><span>Quem Somos</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><span>O FUNDADOR</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><span>Serviços</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><span>Projetos Passados</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><span>Contato</span></a>\n      </li>\n    </ul>     \n  </div>\n  </div>\n</nav>\n\n  <main role=\"main\">\n    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"jumbotron \">\n      <!-- <h1 class=\"display-3\"> ATITUDE!</h1> -->\n      <p class=\"jumbo-text\"> O sucesso é mais que aptidão é</p>\n      <h1 class=\"display-3 \"> ATITUDE!</h1>\n      <!-- <div class=\"container\">\n        <p class=\"jumbo-text\">Soluções em Engenharia</p>\n        <h1 class=\"display-3 \"> ATITUDE!</h1>\n      </div> -->\n    </div>\n    <!-- sobre o empresário -->\n    <div class=\"container\">\n      <h2 class=\"text-center\">QUEM SOMOS</h2>\n      <hr><br>\n      <div class=\"row\">        \n        <div class=\"companyInfo col-md-6\">\n          <h2 class=\"text-center\"><em>ATITUDE!</em></h2> <br>\n          <div class=\"col-md-12\">\n            <h4 class=\"\">A Atitude é uma empresa \n            no ramo da engenharia elétrica, criada com objetivo de promover soluções energética a \n            sociedade <br> \n            Acesso à energia sustentável infinita com alta tecnologia e baixo custo <br>\n            Projetos e execuções nos segmentos, promovendo \n            conforto e segurança aos clientes, tendo o prazer de \n            oferecer nossas soluções a todos <br>\n            Surgiu no desejo de ser empreendedor e o amor \n            a profissão!\n            No tempo discutíamos sobre o poder de ter atitude, então\n            resolvemos dedicar esse nome para a empresa <br>                            \n            </h4>   \n            <br>\n            <h3 class=\"text-center\"><em>O homem com fé e atitude realizará todos seus objetivos!</em></h3>\n          </div>      \n        </div>\n        <div class=\"companyImage col-md-6\">\n          <img id=\"imgCompany\" src=\"assets/logos/0001.png\" alt=\"\">\n        </div>\n      </div>\n      <hr><br>\n      <h2 class=\"text-center\">O FUNDADOR</h2>\n      <hr><br>\n      <div class=\"row\">\n        <div class=\"founderImage col-md-6\">\n          <img id=\"imgFounder\" src=\"assets/imgs/pp.jpg\" alt=\"\">\n        </div>\n        <div class=\"founderInfo col-md-6\">\n          <h3 class=\"text-center\">Flavio Rego</h3> <br>\n            <div class=\"col-md-12\">\n              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie urna vitae mauris facilisis rutrum. Praesent eget leo lobortis, euismod nibh sed, feugiat orci. Aenean fermentum, nunc id sollicitudin tristique, diam libero congue felis, ac suscipit mauris dui vitae velit. Suspendisse ac ipsum sed massa sollicitudin imperdiet. Sed dui ante, mollis sed dignissim et, accumsan non mi. Sed rhoncus dolor augue, vitae gravida velit vestibulum sed.</h4>\n              <h3 class=\"text-center\">Formação</h3>              \n              <ul>\n                <li><h4>Técnico em mecatrônica </h4></li>\n                <li><h4>Bacharel em engenharia elétrica </h4></li>\n                <li><h4>Pós-Grraduando em engenharia elétrica </h4></li>\n                <li><h4><em>Ênfase em Instalações Residenciais</em></h4></li>\n              </ul>\n            </div>\n        </div>\n      </div>\n      <hr><br>\n    </div>\n    <div class=\"container\">\n      <!-- Example row of columns -->\n      <div class=\"row\">\n        <div class=\"col-md-4 card\" \n        style=\"background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('assets/imgs/consultoria_1.jpg')\">\n          <h2>Subestção Aérea</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n        </div>\n        <div class=\"col-md-4 card\"\n        style=\"background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('assets/imgs/energia_solar_foto_1.jpeg')\">\n          <h2>Energia Solar Fotovoltaico</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n        </div>\n        <div class=\"col-md-4 card\"\n        style=\"background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('assets/imgs/manutencao_de_motor_eletrico_1.png')\">\n          <h2>Rede Telefonia & Antena</h2>\n          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-4 card\"\n        style=\"background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('assets/imgs/projeto_eletrico_1.png')\">\n          <h2>Projeto Elétrico SPDA</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n        </div>\n        <div class=\"col-md-4 card\"\n        style=\"background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('assets/imgs/projeto_eletrico_1.png')\">\n          <h2>Projeto Elétrico Baixa Tensão</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n        </div>              \n      </div>\n\n      <hr>\n\n    </div> <!-- /container -->\n\n  </main>\n\n  <footer class=\"container primaryColor\">\n    <p>CREA-PI: 1919978461</p>\n    <p>E-mail: flavio@gmail.com</p>\n    <p>Endereço: uma rua no piaui</p>\n    <p>Telefone: (xx) xxxx-xxxx & (xx) xxxxx-xxxx</p>\n  </footer>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
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

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.isCollapsed = true;
    }
    HomePageComponent.prototype.toggleCollapsed = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Renalt\OneDrive\Documents\Dev\site_Flavio\site-atitude\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map