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
  public panierVide = true;
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
      this.panierVide = true;
    }
    for (const produit of this.listeProduit) {
      this.prixArticleCourant = produit.prix;
      this.PrixTotal += this.prixArticleCourant;
    }
    this.storage.set('PrixTotal', this.PrixTotal);
    if (this.PrixTotal != 0) {
      this.panierVide = false;
    }
  }

  public supprimerProduit(i: number, achat: Produit) { //suppresion du produit du panier avec son indice
    this.PrixTotal = this.storage.get('PrixTotal');
    this.listeProduit = this.storage.get('PanierFinal');
    if (i == 0) {
      this.listeProduit.shift();
      this.storage.set('PanierFinal', this.listeProduit);
      this.PrixTotal = this.PrixTotal - achat.prix;
      this.storage.set('PrixTotal', this.PrixTotal);
      this.panierVide = true;
    } else {
      this.listeProduit.splice(i, 1);
      this.PrixTotal = this.PrixTotal - achat.prix;
      this.storage.set('PrixTotal', this.PrixTotal);
      this.storage.set('PanierFinal', this.listeProduit);
    }
  }

      estVide()  {//vérifie si le panier est vide
        return this.panierVide === true;
      }
     pasVide() { //vérifie si le panier n'est pas vide
      return this.panierVide === false;
    }
  }














