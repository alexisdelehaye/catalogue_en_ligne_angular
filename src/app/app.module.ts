
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {StorageServiceModule} from 'angular-webstorage-service';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {ProduitComponent} from './produit/produit.component';
import {AccueilComponent} from './accueil/accueil.component';
import {PanierComponent} from './panier/panier.component';
import { ProduitService } from './produit.service';
import { PaiementSucessComponent} from './paiement/paiementSucess/paiementSucess.component';
import {PaiementFailComponent} from './paiement/paiementFail/paiementFail.component';


 const routes: Routes = [
  { path: '', component: AccueilComponent },
  {path : 'panier', component: PanierComponent},
  {
    path: 'produit/:id',
    component: ProduitComponent
  },
   {
     path : 'panier/:id',
     component : PanierComponent
   },
   {
     path : 'Commande/0',
     component : PaiementFailComponent
   },
   {
     path : 'Commande/1',
     component : PaiementSucessComponent
   },
  {path : 'home', component : AccueilComponent}
];

 const routing = RouterModule.forRoot(routes, {
  enableTracing: true
});

 export const routesSpec: Routes = [];

@NgModule({
  imports:      [ BrowserModule , RouterModule,  routing, RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  ) , RouterModule.forChild(routes) , StorageServiceModule],
  declarations: [ AppComponent, ProduitComponent, AccueilComponent, PanierComponent, PaiementFailComponent, PaiementSucessComponent],
  bootstrap:    [ AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue : ''}, ProduitService ]
})
export class AppModule {


}


