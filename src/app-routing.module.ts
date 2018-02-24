import {RouterModule, Routes} from '@angular/router';
import { AppComponent} from './app/app.component';
import {ProduitDetailsComponent} from './views/produit/produit.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '/home', component: AppComponent },
  {
    path: 'Produit/:id',
    component: ProduitDetailsComponent
  },
  { path: '**', redirectTo: '/notfound' }
];

export const routing = RouterModule.forRoot(routes, {
  enableTracing: true
});
