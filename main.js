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

module.exports = "<nav role=\"navigation\" aria-label=\"main navigation\">\n</nav>\n\n\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./birds/birds.component */ "./src/app/birds/birds.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'example', component: _example_example_component__WEBPACK_IMPORTED_MODULE_11__["ExampleComponent"] },
    { path: 'birds', component: _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__["FirstPageComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["SecondPageComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["MyNavComponent"],
                _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__["FirstPageComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["SecondPageComponent"],
                _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__["BirdContent1"],
                _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__["BirdContent2"],
                _example_example_component__WEBPACK_IMPORTED_MODULE_11__["ExampleComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"]
            ],
            entryComponents: [_example_example_component__WEBPACK_IMPORTED_MODULE_11__["ExampleComponent"], _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__["FirstPageComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["SecondPageComponent"], _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__["BirdContent1"], _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__["BirdContent2"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__["BirdContent1"], _birds_birds_component__WEBPACK_IMPORTED_MODULE_9__["BirdContent2"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/birds/bird-content1.html":
/*!******************************************!*\
  !*** ./src/app/birds/bird-content1.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Are you sure you want to Like this bird?</h2>\n<mat-dialog-content>\n  <p>Click the \"OK\" button to continue or the \"Cancel\" button to exit without saving any changes.</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close aria-label=\"cancel\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial aria-label=\"OK\">OK</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/birds/bird-content2.html":
/*!******************************************!*\
  !*** ./src/app/birds/bird-content2.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Are you sure you want to Share this bird?</h2>\n<mat-dialog-content>\n  <p>Click the \"OK\" button to continue or the \"Cancel\" button to exit without saving any changes.</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close aria-label=\"cancel\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial aria-label=\"OK\">OK</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/birds/birds.component.css":
/*!*******************************************!*\
  !*** ./src/app/birds/birds.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  margin: 1em 0 .5em; \n  line-height: 1.25;\n  color: #198cbf;\n  font-size: 2em;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n}\nh2 {\n  margin-top: 0;\n  padding-top: 0;\n  padding-left: 20px;\n  font-size: 1.5em;\n  line-height: 1.25;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n}\nh3 {\nmargin-top: 0;\npadding-top: 0;\nfont-size: 1.2;\nline-height: 1.25;\nfont-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\nnav a:visited, a:link {\n  color: rgb(11, 42, 58);\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\np, figure {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n}\nli {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n}\na {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\n.bird-cards {\n  width:100%;\n  height: auto;\n  }\nmat-card-title {\n  margin-top: 0;\n  padding-top: 0;\n  font-size: 1.2em;\n  line-height: 1.25;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\nmat-card-subtitle {\n  margin-top: 0;\n  padding-top: 0;\n  font-size: 1.0;\n  line-height: 1.25;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n}\n.button-depth {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n"

/***/ }),

/***/ "./src/app/birds/birds.component.html":
/*!********************************************!*\
  !*** ./src/app/birds/birds.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n<h2>Birds of Texas</h2>\n<mat-grid-list cols=\"2\" rowHeight=\"600px\" role=\"list\">\n  <mat-grid-tile role=\"listitem\">\n      <mat-card id=\"card\">\n          <mat-card-header>\n            <mat-card-title class=\"card-title\">Whooping Crane</mat-card-title>\n              <mat-card-subtitle class=\"card-subtitle\">Grus americana</mat-card-subtitle>\n            </mat-card-header>\n          <mat-card-content>\n            <img class=\"bird-cards\" mat-card-lg-image src=\"../assets/birds/P1000280.jpg\" alt=\"image of a whooping crane\">\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button class=\"button-depth\" (click)=\"openDialog1()\">LIKE</button>\n            <button mat-button class=\"button-depth\" (click)=\"openDialog2()\">SHARE</button>\n          </mat-card-actions>\n      </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n      <mat-card>\n          <mat-card-header>\n            <mat-card-title class=\"card-title\">Great Blue Heron</mat-card-title>\n              <mat-card-subtitle class=\"card-subtitle\">Ardea herodias</mat-card-subtitle>\n            </mat-card-header>\n          <mat-card-content>\n            <img class=\"bird-cards\" mat-card-lg-image src=\"../assets/birds/P1000319.jpg\" alt=\"image of a great blue heron\" >\n          </mat-card-content>\n          <mat-card-actions>\n              <button mat-button class=\"button-depth\" (click)=\"openDialog1()\">LIKE</button>\n              <button mat-button class=\"button-depth\" (click)=\"openDialog2()\">SHARE</button>\n          </mat-card-actions>\n      </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n      <mat-card>\n          <mat-card-header>\n            <mat-card-title class=\"card-title\">Brown Pelican</mat-card-title>\n              <mat-card-subtitle class=\"card-subtitle\">Pelecanus occidentalis</mat-card-subtitle>\n            </mat-card-header>\n          <mat-card-content>\n            <img class=\"bird-cards\" mat-card-lg-image src=\"../assets/birds/P1000387.jpg\" alt=\"image of a brown pelican\" >\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button class=\"button-depth\" (click)=\"openDialog1()\">LIKE</button>\n            <button mat-button class=\"button-depth\" (click)=\"openDialog2()\">SHARE</button>\n          </mat-card-actions>\n      </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-card>\n        <mat-card-header>\n          <mat-card-title class=\"card-title\">Neotropic Cormorant</mat-card-title>\n            <mat-card-subtitle class=\"card-subtitle\">Phalacrocorax brasilianus</mat-card-subtitle>\n          </mat-card-header>\n        <mat-card-content>\n          <img class=\"bird-cards\" mat-card-lg-image src=\"../assets/birds/P1000308.jpg\" alt=\"image of a neotropic cormorant\" >\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button class=\"button-depth\" (click)=\"openDialog1()\">LIKE</button>\n          <button mat-button class=\"button-depth\" (click)=\"openDialog2()\">SHARE</button>\n        </mat-card-actions>\n    </mat-card>\n</mat-grid-tile>\n</mat-grid-list>\n</main>\n\n"

/***/ }),

/***/ "./src/app/birds/birds.component.ts":
/*!******************************************!*\
  !*** ./src/app/birds/birds.component.ts ***!
  \******************************************/
/*! exports provided: FirstPageComponent, BirdContent1, BirdContent2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdContent1", function() { return BirdContent1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdContent2", function() { return BirdContent2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirstPageComponent = /** @class */ (function () {
    function FirstPageComponent(dialog) {
        this.dialog = dialog;
    }
    FirstPageComponent.prototype.openDialog1 = function () {
        var dialogRef = this.dialog.open(BirdContent1, {
            height: '100px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    FirstPageComponent.prototype.openDialog2 = function () {
        var dialogRef = this.dialog.open(BirdContent2, {
            height: '100px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    FirstPageComponent.prototype.ngOnInit = function () { };
    FirstPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'birds.component',
            template: __webpack_require__(/*! ./birds.component.html */ "./src/app/birds/birds.component.html"),
            styles: [__webpack_require__(/*! ./birds.component.css */ "./src/app/birds/birds.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], FirstPageComponent);
    return FirstPageComponent;
}());

var BirdContent1 = /** @class */ (function () {
    function BirdContent1() {
    }
    BirdContent1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bird-content1',
            template: __webpack_require__(/*! ./bird-content1.html */ "./src/app/birds/bird-content1.html"),
        })
    ], BirdContent1);
    return BirdContent1;
}());

var BirdContent2 = /** @class */ (function () {
    function BirdContent2() {
    }
    BirdContent2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bird-content2',
            template: __webpack_require__(/*! ./bird-content2.html */ "./src/app/birds/bird-content2.html"),
        })
    ], BirdContent2);
    return BirdContent2;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n    margin: 1em 0 .5em; \n    line-height: 1.25;\n    color: #198cbf;\n    font-size: 2em;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\nh2 {\n    margin-top: 0;\n    padding-top: 0;\n    padding-left: 20px;\n    font-size: 1.5em;\n    line-height: 1.25;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\nh2.alert{\n    margin-top: 0;\n    padding-top: 0;\n    padding-left: 20px;\n    font-size: 2em;\n    line-height: 1.25;\n    color: red;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\nh3 {\n  margin-top: 0;\n  padding-top: 0;\n  font-size: 1.2;\n  line-height: 1.25;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\nnav a {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin-top: 10px;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n      font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n    }\nnav a:visited, a:link {\n    color: rgb(11, 42, 58);\n  }\nnav a:hover {\n    color: #039be5;\n    background-color: #CFD8DC;\n  }\nnav a.active {\n    color: #039be5;\n  }\np, figure {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\nli {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\na {\n      font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n    }\n.bird-cards {\n    width:100%;\n    height: auto;\n    }\nmat-card-title {\n    margin-top: 0;\n    padding-top: 0;\n    font-size: 1.2em;\n    line-height: 1.25;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n    }\nmat-card-subtitle {\n    margin-top: 0;\n    padding-top: 0;\n    font-size: 1.0;\n    line-height: 1.25;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\nmat-form-field{\n      padding-left: 20px;\n  }\nmat-checkbox{\n    padding-left: 20px;\n  }\nmat-radio-button{\n    padding-left: 20px;\n  }\n.form-container {\n    display: flex;\n    flex-direction: column;\n  }\n.form-container > * {\n    width: 100%;\n  }\n.form-container form {\n    margin-bottom: 20px;\n  }\n.form-container form > * {\n    margin: 5px 0;\n  }\n.form-container .mat-radio-button {\n    margin: 0 5px;\n  }\nbutton{\n    padding-left: 20px;\n  }\nlabel{\n    font-size: 1.0;\n    line-height: 1.25;\n    padding-left: 20px;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\nspan{\n    color: red;\n    font-size: 2em;\n    font-weight: bold;\n  }\nlabel.failed {\n\tborder: red thin solid;\n}\ninput {\n  border: black thin solid;\n}\ntextarea{\n  border: black thin solid;\n}\n\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 tabindex=\"-1\" id=\"errText\" aria-live=\"assertive\" class=\"alert\"></h2>\n<h2>Contact Us</h2>\n<form class=\"form-container\" name=\"signup\" id=\"signup\" method=\"post\" action=\"#\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidat> \n\n    <mat-form-field class=\"form-group\">\n      <label for=\"firstName\">First Name <span>*</span>\n      <input matInput type=\"text\"  class=\"form-control\" name=\"firstName\" id=\"firstName\"\n      [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" \n      [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required />\n      <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\n      <div *ngIf=\"firstName.errors.required\">First name is required</div>\n      </div>\n    </label> \n   </mat-form-field>\n\n    <mat-form-field class=\"form-group\">\n      <label for=\"lastName\">Last Name <span>*</span>\n      <input matInput type=\"text\" class=\"form-control\" name=\"lastName\" id=\"lastName\"\n      [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" \n      [ngClass]=\"{ 'is-invalid': f.submitted && lastName.invalid }\" required />\n      <div *ngIf=\"f.submitted && lastName.invalid\" class=\"invalid-feedback\">\n      <div *ngIf=\"lastName.errors.required\">Last name is required</div>\n      </div>\n    </label> \n    </mat-form-field>\n\n    <mat-form-field class=\"form-group\">\n        <label for=\"email\">Email <span>*</span>\n        <input matInput type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email />\n        <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"email.errors.required\">Email is required</div>\n            <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n        </div>\n      </label>\n    </mat-form-field>\n\n    <mat-form-field>\n        <label for=\"message\">Message: <span>*</span>\n        <textarea matInput class=\"form-control\" name=\"message\" id=\"message\" [(ngModel)]=\"model.message\" \n        #message=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required message></textarea>\n        <div *ngIf=\"f.submitted && message.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"message.errors.required\">Your message is required</div>\n        </div>\n      </label>\n      </mat-form-field>\n\n    <mat-form-field class=\"form-group\">\n      <label>Why are you interested in birds? \n      <mat-select aria-label=\"interest\" id=\"interest\" \n       name=\"interest\">\n        <mat-option value=\"option1\">Citzen Science</mat-option>\n        <mat-option value=\"option2\">Bird Photography</mat-option>\n        <mat-option value=\"option3\">Ornithology Research</mat-option>\n      </mat-select>\n    </label>\n  </mat-form-field>\n\n  <mat-radio-group aria-labelledby=\"how\">\n      <label id=\"how\">How did you hear about us?</label>\n        <mat-radio-button value=\"1\"><label>Internet</label></mat-radio-button>\n        <mat-radio-button value=\"2\"><label>Social Media</label></mat-radio-button>\n        <mat-radio-button value=\"3\"><label>Email</label></mat-radio-button>\n  </mat-radio-group>\n    \n  <br>\n  \n  <mat-checkbox>\n    <label>Check here if you would like information on volunteer opportunities</label>\n  </mat-checkbox>\n \n  <br>\n    <div class=\"form-group\">\n    <button mat-button class=\"btn btn-primary\" type=\"submit\" value=\"submit\">Submit</button>\n    </div>\n  </form>\n "

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: SecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function() { return SecondPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Dialog with header, scrollable content and actions
 */
var SecondPageComponent = /** @class */ (function () {
    function SecondPageComponent() {
        this.model = {};
    }
    SecondPageComponent.prototype.onSubmit = function (form) {
        console.log('you submitted value:', form);
    };
    SecondPageComponent.prototype.ngOnInit = function () {
        $(document).ready(function (e) {
            $('#signup').submit(function () {
                $('#errText').html('');
                $('input').removeAttr("aria-invalid");
                $('label').removeAttr("class");
                var eFlag = 0;
                if ($('#firstName').val() === '') {
                    $('#firstName').attr("aria-invalid", "true");
                    $("label[for='firstName']").addClass('failed');
                    eFlag++;
                }
                if ($('#lastName').val() === '') {
                    $('#lastName').attr("aria-invalid", "true");
                    $("label[for='lastName']").addClass('failed');
                    eFlag++;
                }
                if ($('#email').val() === '') {
                    $('#email').attr("aria-invalid", "true");
                    $("label[for='email']").addClass('failed');
                    eFlag++;
                }
                if ($('#message').val() === '') {
                    $('#message').attr("aria-invalid", "true");
                    $("label[for='message']").addClass('failed');
                    eFlag++;
                }
                if (eFlag > 0) {
                    $('#errText').html("Please complete  all required fields (" + eFlag + ") and retry").focus();
                }
                return false;
            });
        });
    };
    SecondPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-us.component',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")],
        })
    ], SecondPageComponent);
    return SecondPageComponent;
}());



/***/ }),

/***/ "./src/app/example/example.component.css":
/*!***********************************************!*\
  !*** ./src/app/example/example.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    margin-top: 0;\n    padding-top: 0;\n    padding-left: 20px;\n    font-size: 1.5em;\n    line-height: 1.25;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\n  h3 {\n  margin-top: 0;\n  padding-top: 0;\n  font-size: 1.2;\n  line-height: 1.25;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n  }\n  nav a {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin-top: 10px;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n      font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n    }\n  nav a:visited, a:link {\n    color: rgb(11, 42, 58);\n  }\n  nav a:hover {\n    color: #039be5;\n    background-color: #CFD8DC;\n  }\n  nav a.active {\n    color: #039be5;\n  }\n  p, figure {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n    padding-left: 20px;\n}\n  li {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n    margin-left: 30px;\n  }\n  a {\n      font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n    }"

/***/ }),

/***/ "./src/app/example/example.component.html":
/*!************************************************!*\
  !*** ./src/app/example/example.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n<p aria-label=\"va11yS\"><a href=\"https://ibma.github.io/Va11yS/\">Back to Va11yS</a></p>\n\n  <h2>Angular Material Example</h2>\n      \n  <p>This Angular Material example is a single page Angular 6 application \n    that is deployed on GitHub. \n    The application was created using the <a href=\"https://cli.angular.io/\">Angular CLI</a> and the \n    <a href=\"https://github.com/seeschweiler/angular6-material\">Angular 6 Material</a> code. Accessibility test \n    results are included at the bottom of the page.\n </p>\n <p>To improve accessibility, the following have been added to the application:</p>\n <ul>\n   <li><a href=\"https://www.w3.org/WAI/PF/aria/roles\">W3C WAI ARIA Roles</a></li>\n   <li><a href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html\">W3C WAI ARIA 14: Using aria-label to provide an invisible label where a visible label cannot be used</a></li>\n   <li><a href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA21.html\">W3C WAI ARIA 21: Using aria-invalid to indicate an error field</a></li>\n   <li>Styles to improve color contrast.</li>\n </ul>\n\n <p>Angular Material automatically includes the following on the form controls in this example:</p>\n <ul>\n   <li><code>mat-form-field</code> uses the <code>label</code> tag to automatically create the <code>aria-label</code> for the <code>input</code></li>\n   <li><code>mat-select</code> automatically adds <code>role=\"listbox\"</code> to the component and <code>role=\"option\"</code>to the select options.</li>\n   <li><code>mat-radio-button</code> automatically adds <code>input type=\"radio\"</code> to the component.</li>\n   <li><code>mat-checkbox</code> uses an internal <code>input type=\"checkbox\"</code>. This internal checkbox receives focus and \n    is automatically labelled by the text content of the <code>mat-checkbox</code> element. In addition, <code>aria-checked=\"false\"</code>\n    is added and automatically changes to <code>aria-checked=\"true\"</code> when the checkbox is checked.</li>\n   <li><code>tabindex=\"0\"</code></li>\n </ul>\n <p>Note: The <a href=\"https://material.angular.io/components/categories\">Angular Material</a> web site\n  lists the built-in accessibility for each component.</p>\n</main>\n<footer>\n  <hr>\n  <h2>Tested on:</h2>\n    <div>\n     <ul>\n       <li>Mac OS Sierra 10.13.4, VoiceOver, and the Chrome 66.0.3359.181 browser.</li>\n        <ul>\n          <li>Results - VoiceOver announces:</li>\n            <ul>\n              <li>titles, links, headings, aria-labels, and landmarks</li>\n              <li>lists and number of list items</li>\n              <li>dialog modal content and buttons</li>\n              <li>form controls, states (i.e. selected, checked, etc.) and required fields</li>\n              <li>form validation message on submit</li>\n            </ul>\n        </ul>\n     </ul>\n    </div>\n    <div>\n      <ul>\n        <li>Windows 7, JAWS 2018.1805.33 ILM, and the Chrome 67.0.3396.79 browser.</li>\n         <ul>\n           <li>Results - JAWS announces:</li>\n             <ul>\n               <li>titles, links, headings, aria-labels, and landmarks</li>\n               <li>lists and number of list items</li>\n               <li>dialog modal content and buttons</li>\n               <li>form controls, states (i.e. selected, checked, etc.) and required fields</li>\n               <li>form validation message on submit</li>\n               <li>Note: If a text input field has been visited and left empty, then revisted,\n                Jaws announces:  Last name, star edit required, invalid entry, \n                type in text, and a red underline displays underneath the text input field.</li>\n             </ul>\n         </ul>\n      </ul>\n     </div>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/example/example.component.ts":
/*!**********************************************!*\
  !*** ./src/app/example/example.component.ts ***!
  \**********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
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

var ExampleComponent = /** @class */ (function () {
    function ExampleComponent() {
    }
    ExampleComponent.prototype.ngOnInit = function () {
    };
    ExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.css */ "./src/app/example/example.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\nmat-toolbar{\n  margin: 1em 0 .5em; \n  line-height: 1.25;\n  color: #ffffff;\n  background: #198cbf;\n  font-size: 2em;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"HelvNeueLightforIBM\", Arial, sans-serif;\n}\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav \n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"isHandset ? 'directory' : 'dialog'\"\n    [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\"\n    [opened]=\"!(isHandset | async)!.matches\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list >\n      <a mat-list-item href=\"/example\"><label>Angular Material</label></a>\n      <a mat-list-item href=\"/birds\"><label>Birds of Texas</label></a>\n      <a mat-list-item href=\"/contact-us\"><label>Contact Us</label></a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content aria-label=\"side nav content\">\n    <mat-toolbar>\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"(isHandset | async)!.matches\">\n        <mat-icon alt=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Accessible Angular Material Example</span>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset);
    }
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MyNavComponent);
    return MyNavComponent;
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
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/snidersd/Documents/GitHub/accessible-material/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map