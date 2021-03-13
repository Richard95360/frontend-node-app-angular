"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var signin_component_1 = require("./components/auth/signin/signin.component");
var signup_component_1 = require("./components/auth/signup/signup.component");
var shop_component_1 = require("./components/auth/shop/shop.component");
var single_product_component_1 = require("./components/auth/shop/single-product/single-product.component");
var add_product_component_1 = require("./components/auth/shop/add-product/add-product.component");
var edit_product_component_1 = require("./components/auth/shop/edit-product/edit-product.component");
var cart_component_1 = require("./components/auth/shop/cart/cart.component");
var header_component_1 = require("./components/partials/header/header.component");
var footer_component_1 = require("./components/partials/footer/footer.component");
var not_found_component_1 = require("./components/partials/not-found/not-found.component");
var header_page_component_1 = require("./components/partials/header-page/header-page.component");
var quick_view_modal_component_1 = require("./components/partials/modal/quick-view-modal/quick-view-modal.component");
var add_to_cart_component_1 = require("./components/partials/modal/add-to-cart/add-to-cart.component");
var delete_product_modal_component_1 = require("./components/partials/modal/delete-product-modal/delete-product-modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                shop_component_1.ShopComponent,
                single_product_component_1.SingleProductComponent,
                add_product_component_1.AddProductComponent,
                edit_product_component_1.EditProductComponent,
                cart_component_1.CartComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                not_found_component_1.NotFoundComponent,
                header_page_component_1.HeaderPageComponent,
                quick_view_modal_component_1.QuickViewModalComponent,
                add_to_cart_component_1.AddToCartComponent,
                delete_product_modal_component_1.DeleteProductModalComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
