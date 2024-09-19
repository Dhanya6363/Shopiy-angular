import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { CartComponent } from './cart/cart.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'men', component: MenComponent },
  { path: 'product-detail/:productId', component: ProductDetailComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'women', component: WomenComponent },
  { path: 'jewellery', component: JewelleryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop/:productId', component: ShopComponent }, // Shop route
  { path: '', redirectTo: '/men', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/men' }  // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
