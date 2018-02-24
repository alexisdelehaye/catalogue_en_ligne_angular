import {Produit} from '../../models/Produit';
import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgModule} from '@angular/core';

@Component({
  selector : 'app-root',
  templateUrl : './produit.component.html',
  styleUrls: [ './produit.component.css' ]
})

export class ProduitDetailsComponent {
  private model: Produit;
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
}
