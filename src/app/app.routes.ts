import { Routes } from '@angular/router';
export const routes: Routes = [
{path:'',loadComponent:()=>import('./pages/home.component').then(m=>m.HomeComponent)},
{path:'products',loadComponent:()=>import('./pages/products.component').then(m=>m.ProductsComponent)},
{path:'category/:category',loadComponent:()=>import('./pages/products.component').then(m=>m.ProductsComponent)},
{path:'cart',loadComponent:()=>import('./pages/cart.component').then(m=>m.CartComponent)},
{path:'checkout',loadComponent:()=>import('./pages/checkout.component').then(m=>m.CheckoutComponent)},
{path:'order-success',loadComponent:()=>import('./pages/success.component').then(m=>m.SuccessComponent)},
{path:'**',redirectTo:''}
];
