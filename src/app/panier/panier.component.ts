///<reference path="../produit/produit.component.ts"/>
import {Component, Inject, Input, NgModule, OnInit} from '@angular/core';
import {Produit} from '../models/Produit';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';



@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})



export class PanierComponent {
  public PrixTotal: number;
  listeProduit: Produit[];
  private prixArticleCourant: number;
  public randomPage = Math.round(Math.random());

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.PrixTotal = 0;
    this.storage.set('PrixTotal', this.PrixTotal);
    this.listeProduit = this.storage.get('PanierFinal');
    for (const produit of this.listeProduit) {
      this.prixArticleCourant = produit.prix;
      this.PrixTotal += this.prixArticleCourant;
    }
    this.storage.set('PrixTotal', this.PrixTotal);
    /*
    for (let i = 0; i < this.storage.get('indice') + 1; i++) {
      if (this.storage.get(i.toString()) != null) {
        this.listeProduit.push(this.storage.get(i.toString()));
      }
    }
*/
  }

  public supprimerProduit(i: number) {
    this.PrixTotal = this.storage.get('PrixTotal');
    this.listeProduit = this.storage.get('PanierFinal');
    this.listeProduit.splice(i);
    this.PrixTotal -= this.listeProduit[i].prix;
    this.storage.set('PrixTotal', this.PrixTotal);
    this.storage.set('PanierFinal', this.listeProduit);
  }
}













