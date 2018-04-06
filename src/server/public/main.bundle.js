webpackJsonp(["main"],{

/***/ "./src/client/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/client/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-toggler-icon {\n    width: 1.0em;\n    height: 1.10em;\n}\n\n.title-align-weight {\n    font-weight: 300;\n    text-align: center;\n}\n\n.price-display-size {\n    display: inline-block;\n    font-size: 25px;\n    font-weight: 700;\n}\n\n.price-media-size {\n    font-size: 10px;\n    margin-left: 3px;\n    display: inline-block;\n}\n\n.short-desc-color-size {\n    color: #dc1821;\n    margin-left: 2px;\n    font-size: 12px;\n}\n\n.carousel-control-next-icon {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff0000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n}\n\n.carousel-control-prev-icon {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff0000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\n}\n\n.form-control {\n    border-radius: 1.20em;\n}\n\n.margin-grid {\n    margin: 1rem 1rem 1rem 1rem;\n}\n\n.divider {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n\n.custom-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    margin-right: 0px;\n    margin-left: 0px;\n}\n\n.fa-tags {\n    color: #dc1821;\n}\n\n.qty-border-radius {\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n}\n\n.fa-my {\n    display: inline-block;\n    border-radius: 50px;\n    -webkit-box-shadow: 0px 0px 2px #888;\n            box-shadow: 0px 0px 2px #888;\n    padding: 0.5em 0.6em;\n}\n\n.fa-red-star-lg:before {\n    content: \"\\f005\";\n    color: red;\n    font-size: 20px;\n}\n\n.fa-white-star-lg:before {\n    content: \"\\f006\";\n    font-size: 20px;\n}\n\n.fa-red-star-md:before {\n    content: \"\\f005\";\n    color: red;\n    font-size: 15px;\n}\n\n.fa-white-star-md:before {\n    content: \"\\f006\";\n    font-size: 15px;\n}"

/***/ }),

/***/ "./src/client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" routerLink=\"/home\">MyRetail</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        </form>\n        <ul class=\"nav navbar-nav ml-auto\">\n            <li>\n                <div style=\"text-align: center;\"> {{cart}} Items\n                    <i class=\"fa fa-shopping-cart fa-2x\"></i>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div class=\"row margin-grid\">\n    <div class=\"col-12 col-md-6 mt-4\">\n        <h2 id=\"title\" class=\"title-align-weight\">{{itemData?.title}}</h2>\n        <div id=\"carouselControls\" class=\"carousel slide\" data-ride=\"carousel\" style=\"margin-top: 20px;\">\n            <div class=\"carousel-inner\">\n                <div *ngFor=\"let img of images\">\n                    <div class=\"carousel-item rounded mx-auto active\">\n                        <img class=\"d-block w-100\" src=\"{{img.PrimaryImage[0].image}}\" alt=\"First slide\">\n                    </div>\n                    <div *ngFor=\"let data of img.AlternateImages\" class=\"carousel-item rounded mx-auto\">\n                        <img class=\"d-block w-100\" src=\"{{data.image}}\" alt=\"Second slide\">\n                    </div>\n                </div>\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselControls\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselControls\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"col-12 col-md-6 mt-4\">\n        <div class=\"price-display-size\">\n            {{offerPrice?.formattedPriceValue}}\n        </div>\n        <div class=\"price-media-size\"> {{offerPrice?.priceQualifier}}</div>\n\n        <div class=\"divider\"></div>\n\n        <div *ngFor=\"let promotion of promotions\">\n            <div *ngFor=\"let description of promotion.Description\">\n                <i class=\"fa fa-tags\"></i>\n                <span class=\"short-desc-color-size\">{{description.shortDescription}}</span>\n            </div>\n        </div>\n\n        <div class=\"divider\"></div>\n\n        <div class=\"row mx-0\">\n            <div class=\"col-md-6 px-0 qty-border-radius\">\n                <div class=\"row mx-0 py-1\">\n                    <div class=\"pl-3\" style=\"display:inline-block; padding-right: 100px;\">quantity:</div>\n                    <div style=\"display:inline-block\">\n                        <i class=\"fa fa-minus fa-my\" aria-hidden=\"true\" (click)=\"downQuantity()\"></i>\n                    </div>\n                    <div style=\"display: inline-block; padding-top:3px;\" class=\"px-3\">{{quantity}}</div>\n                    <div style=\"display:inline-block\">\n                        <i class=\"fa fa-plus fa-my\" aria-hidden=\"true\" (click)=\"upQuantity()\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row my-4 ml-0\">\n            <div class=\"col-md-6 pl-0 pr-2\">\n                <button id=\"pickup\"  class=\"btn btn-secondary py-2\" style=\"width: 100%;\" *ngIf=\"isPickInStore()\">\n                    PICK UP IN STORE\n                </button>\n            </div>\n            <div class=\"col-md-6 pl-0 pr-2\">\n                <button id=\"addToCartButton\" class=\"btn btn-danger py-2\" style=\"width: 100%;\" *ngIf=\"isAddToCart()\">ADD TO CART\n                </button>\n            </div>\n        </div>\n\n        <div [innerHTML]=\"legalCopy\" style=\"font-size: 10px;\">\n        </div>\n\n        <div class=\"row mx-0\">\n            <div class=\"col-sm-4 pl-0 pr-2\">\n                <button class=\"btn btn-light\" style=\"width: 100%;\">ADD TO REGISTRY</button>\n            </div>\n            <div class=\"col-sm-4 pl-0 pr-2\">\n                <button class=\"btn btn-light\" style=\"width: 100%\">ADD TO LIST</button>\n            </div>\n            <div class=\"col-sm-4 pl-0 pr-2\">\n                <button class=\"btn btn-light\" style=\"width: 100%\">SHARE</button>\n            </div>\n        </div>\n\n        <div class=\"my-4\">\n            <h4>product highlights</h4>\n            <ul>\n                <li *ngFor=\"let spec of productHighlights\" [innerHTML]=\"spec\">\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"row margin-grid\">\n    <div class=\"col-12 col-md-6\">\n        <div class=\"row mx-3\">\n            <div appStar=\"{{customerReviews?.consolidatedOverallRating}}\" size=\"lg\"></div>\n            &nbsp;\n            <h4>overall</h4>\n\n            <div class=\"ml-auto\">\n                <a href=\"#all_review\">view all {{customerReviews?.totalReviews}} reviews</a>\n            </div>\n        </div>\n        <div class=\"row mx-0\">\n            <div class=\"col-md-6 px-0\" style=\"background-color: rgba(0,0,0,.03); border: 0px;\">\n                <div class=\"ml-3\">\n                    <div class=\"py-2\">\n                        <div>PRO</div>\n                        <div style=\"font-size: 13px;\">most helpful 4-5 star review</div>\n                    </div>\n                    <div class=\"divider mb-2\"></div>\n                    <div appStar=\"{{customerReviews?.Pro[0].overallRating}}\" size=\"md\" class=\"mt-2\"></div>\n                    <h5>{{customerReviews?.Pro[0].title}}</h5>\n                    <p>{{customerReviews?.Pro[0].review}}</p>\n                    <div style=\"font-size:13px;\">\n                        <div style=\"display: inline-block; color: #2020f1\">{{customerReviews?.Pro[0].screenName}}</div>\n                        <div style=\"display: inline-block\">{{customerReviews?.Pro[0].datePosted | date}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 px-0\" style=\"background-color: rgba(0,0,0,.03); border: 0px;\">\n                <div class=\"mr-3\">\n                    <div class=\"py-2\">\n                        <div>CON</div>\n                        <div style=\"font-size: 13px;\">most helpful 1-2 star review</div>\n                    </div>\n                    <div class=\"divider mb-2\"></div>\n                    <div appStar=\"{{customerReviews?.Con[0].overallRating}}\" size=\"md\" class=\"mt-2\"></div>\n                    <h5>{{customerReviews?.Con[0].title}}</h5>\n                    <p>{{customerReviews?.Con[0].review}}</p>\n                    <div style=\"font-size:13px;\">\n                        <div style=\"display: inline-block; color: #2020f1\">{{customerReviews?.Con[0].screenName}}</div>\n                        <div style=\"display: inline-block\">{{customerReviews?.Con[0].datePosted | date}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <p id=\"all_review\"></p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_item_service__ = __webpack_require__("./src/client/app/service/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appItemService) {
        this.appItemService = appItemService;
        this.cart = 0;
        this.quantity = 1;
        this.$getItemData();
    }
    AppComponent.prototype.$getItemData = function () {
        var _this = this;
        this.appItemService.getItemData()
            .subscribe(function (data) {
            _this.itemData = data["CatalogEntryView"][0];
            _this.getItemPrice();
            _this.getItemImages();
            _this.getPromotions();
            _this.getReturnPolicy();
            _this.getProductHighlights();
            _this.getCustomerReview();
        }, function (err) {
            console.log(err.message);
        });
    };
    AppComponent.prototype.getItemPrice = function () {
        this.offerPrice = this.itemData.Offers[0].OfferPrice[0];
    };
    AppComponent.prototype.getItemImages = function () {
        this.images = this.itemData.Images;
    };
    AppComponent.prototype.getPromotions = function () {
        this.promotions = this.itemData.Promotions;
    };
    AppComponent.prototype.upQuantity = function () {
        this.quantity++;
    };
    AppComponent.prototype.downQuantity = function () {
        if (this.quantity !== 1) {
            this.quantity--;
        }
    };
    AppComponent.prototype.getReturnPolicy = function () {
        this.legalCopy = this.itemData.ReturnPolicy[0].legalCopy;
    };
    AppComponent.prototype.getProductHighlights = function () {
        this.productHighlights = this.itemData.ItemDescription[0].features;
    };
    AppComponent.prototype.getCustomerReview = function () {
        this.customerReviews = this.itemData.CustomerReview[0];
    };
    /*
       Show the pick up in store only if the item is available instore, purchasingChannelCode equals 0 or 2.
     */
    AppComponent.prototype.isPickInStore = function () {
        if (this.itemData !== undefined) {
            var purchasingChannelCode = this.itemData.purchasingChannelCode;
            // const inventoryStatus = this.itemData.inventoryStatus;
            // && inventoryStatus === "InStore")
            return purchasingChannelCode === "0" || purchasingChannelCode === "2";
        }
    };
    /*
      Show the add to cart button only if the item is available online, purchasingChannelCode equals 0 or 1.
    */
    AppComponent.prototype.isAddToCart = function () {
        if (this.itemData !== undefined) {
            var purchasingChannelCode = this.itemData.purchasingChannelCode;
            // const inventoryStatus = this.itemData.inventoryStatus;
            // && inventoryStatus === "Online")
            return purchasingChannelCode === "0" || purchasingChannelCode === "1";
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/client/app/app.component.html"),
            styles: [__webpack_require__("./src/client/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_item_service__["a" /* ItemService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_item_service__ = __webpack_require__("./src/client/app/service/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directive_star_directive__ = __webpack_require__("./src/client/app/directive/star.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__directive_star_directive__["a" /* StarDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_item_service__["a" /* ItemService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/client/app/directive/star.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
   value of rating will be passed to this directive as input("appStar")
   number of red color star will be created equivalent to rating value
   white color star will be created equivalent to 5 - rating value
 */
var StarDirective = /** @class */ (function () {
    function StarDirective(el, ren) {
        this.el = el;
        this.ren = ren;
    }
    Object.defineProperty(StarDirective.prototype, "appStar", {
        set: function (value) {
            if (value.toLocaleString() !== "") {
                var nonFillStar = 5 - value;
                for (var i = 0; i < value; i++) {
                    var _span = this.ren.createElement("span");
                    this.ren.addClass(_span, "fa");
                    if (this.size === "lg") {
                        this.ren.addClass(_span, "fa-red-star-lg");
                    }
                    if (this.size === "md") {
                        this.ren.addClass(_span, "fa-red-star-md");
                    }
                    this.ren.appendChild(this.el.nativeElement, _span);
                }
                for (var i = 0; i < nonFillStar; i++) {
                    var _span1 = this.ren.createElement("span");
                    this.ren.addClass(_span1, "fa");
                    if (this.size === "lg") {
                        this.ren.addClass(_span1, "fa-white-star-lg");
                    }
                    if (this.size === "md") {
                        this.ren.addClass(_span1, "fa-white-star-md");
                    }
                    this.ren.appendChild(this.el.nativeElement, _span1);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])("size"),
        __metadata("design:type", Object)
    ], StarDirective.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], StarDirective.prototype, "appStar", null);
    StarDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: "[appStar]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]])
    ], StarDirective);
    return StarDirective;
}());



/***/ }),

/***/ "./src/client/app/service/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getItemData = function () {
        return this.http.get("api/item");
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map