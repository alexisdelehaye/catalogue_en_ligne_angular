


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ProduitDetailsComponent} from '../views/produit/produit.component';
import {RouterModule} from '@angular/router';
import {routing} from '../app-routing.module';


@NgModule({
  imports:      [ BrowserModule, RouterModule ],
  declarations: [ AppComponent, ProduitDetailsComponent ],
  bootstrap:    [ AppComponent, ProduitDetailsComponent ]
})
export class AppModule {}
