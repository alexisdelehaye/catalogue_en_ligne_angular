
import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgModule} from '@angular/core';
import {Produit} from '../models/Produit';
import {Panier} from '../models/Panier';
import {PanierComponent} from '../panier/panier.component';

@Component({
  selector : 'app-produit',
  template : `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="http://lorempixel.com/250/250/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{model.nom}}</h5>
      <p class="card-text">{{model.description}}</p>
      <p class="card-texte">{{model.prix}} €</p>
      <button (click)="AjouterPanier(model)"class="btn btn-primary">Ajouter au panier</button>
    </div>
  </div>

  `,
  styleUrls: [ './produit.component.css' ]
})

export class ProduitComponent {
  public model: Produit;
  public panierProd: PanierComponent;

  public listeProduit: Produit[] = [
    new Produit('sacoche', 'sacoche en cuir', ' c\'est une sacoche en cuir cher !', 4000),
    new Produit(' pantalon', 'pantalon noir ', ' c\'est un beau pantalon noir', 20)
  ];

  constructor(private route: ActivatedRoute) {
    let myId = '';
    this.route.params.subscribe(params => {
      myId = params['id'];
    });

    this.model = this.listeProduit[myId];
  }


  AjouterPanier(model) {
    this.panierProd.panier.listeArticle.push(model);
    this.panierProd.panier.prixTot += model.prix;
    this.panierProd.panier.nombreArt++;
}
}
