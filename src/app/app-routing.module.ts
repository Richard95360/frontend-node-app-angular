import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/auth/shop/add-product/add-product.component';
import { CartComponent } from './components/auth/shop/cart/cart.component';
import { EditProductComponent } from './components/auth/shop/edit-product/edit-product.component';
import { ShopComponent } from './components/auth/shop/shop.component';
import { SingleProductComponent } from './components/auth/shop/single-product/single-product.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'shop',component:ShopComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'single-product/:id',component:SingleProductComponent},
  {path:'edit-product/:id',component:EditProductComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
