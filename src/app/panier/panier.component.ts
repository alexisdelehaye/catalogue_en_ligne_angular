import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../models/Produit';
import {Panier} from '../models/Panier';
import {ActivatedRoute} from '@angular/router';
import {ProduitComponent} from '../produit/produit.component';


@Component({
  selector : 'app-panier',
  templateUrl : './panier.component.html',
  styleUrls : ['./panier.component.css']
})

export class PanierComponent {
  @Input() childMessage: Produit;
  public listeArticle: Produit[] = [new Produit('test', '', '', 0),
    new Produit(' tshirt blanc', 'pantalon noir ', ' c\'est un beau pantalon noir', 9),
  ];
  public panier: Panier = new Panier(this.listeArticle, 0, 0);
  private achat: Produit;

  receiveMessage($event) {
    this.achat = $event;
    this.listeArticle.push(this.achat);
  }
}






