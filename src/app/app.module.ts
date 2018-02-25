
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {RouterModule, Routes} from '@angular/router';


import {APP_BASE_HREF} from '@angular/common';
import {ProduitComponent} from './produit/produit.component';
import {AccueilComponent} from './accueil/accueil.component';
import {PanierComponent} from './panier/panier.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  {path : 'panier', component: PanierComponent},
  {
    path: 'produit/:id',
    component: ProduitComponent
  },
  {path : 'home', component : AccueilComponent}
];

 const routing = RouterModule.forRoot(routes, {
  enableTracing: true
});


@NgModule({
  imports:      [ BrowserModule , RouterModule,  routing, RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )  ],
  declarations: [ AppComponent, ProduitComponent, AccueilComponent, PanierComponent ],
  bootstrap:    [ AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '' }]
})
export class AppModule {}
