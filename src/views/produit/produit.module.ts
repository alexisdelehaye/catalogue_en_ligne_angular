import {ProduitDetailsComponent} from './produit.component';
import {RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';
import {AppComponent} from '../../app/app.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports:      [ BrowserModule, RouterModule ],
  declarations: [  ProduitDetailsComponent ],
  bootstrap:    [ProduitDetailsComponent ]
})

export class ProduitModule {}
