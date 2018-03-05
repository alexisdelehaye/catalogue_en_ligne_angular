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
  private PrixTotal: number;
  listeProduit: Produit[];
  private prixArticleCourant: number;
  public randomPage = Math.round(Math.random());

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.storage.remove('PrixTotal');
    if (this.storage.get('PrixTotal') == null) {
      this.storage.set('PrixTotal', this.PrixTotal);
    }
    this.PrixTotal = this.storage.get('PrixTotal');
    this.listeProduit = this.storage.get('PanierFinal');
    if (this.PrixTotal == null) {
      this.PrixTotal = 0;
    }
    for (const produit of this.listeProduit) {
      this.prixArticleCourant = produit.prix;
      this.PrixTotal += this.prixArticleCourant;
    }
    this.storage.set('PrixTotal', this.PrixTotal);
  }

  public supprimerProduit(i: number, achat: Produit) {
    this.PrixTotal = this.storage.get('PrixTotal');
    this.listeProduit = this.storage.get('PanierFinal');
    if (i == 0) {
      this.listeProduit.shift();
      this.storage.set('PanierFinal', this.listeProduit);
      this.PrixTotal = this.PrixTotal - achat.prix;
      this.storage.set('PrixTotal', this.PrixTotal);
    } else {
      this.listeProduit.splice(i);
      this.PrixTotal = this.PrixTotal - achat.prix;
      this.storage.set('PrixTotal', this.PrixTotal);
      this.storage.set('PanierFinal', this.listeProduit);
    }
  }
}













