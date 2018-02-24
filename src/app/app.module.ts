
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import {routing} from '../app-routing.module';
import {ProduitDetailsComponent} from '../views/produit/produit.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports:      [ BrowserModule , RouterModule,  routing ],
  declarations: [ AppComponent, ProduitDetailsComponent   ],
  bootstrap:    [ AppComponent, ProduitDetailsComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule {}
