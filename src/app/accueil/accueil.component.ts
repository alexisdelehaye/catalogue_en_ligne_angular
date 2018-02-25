
import { Component } from '@angular/core';
import {Produit} from '../models/Produit';

@Component({
  selector : 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: [ './accueil.component.css' ]
})

export class  AccueilComponent {

  public listeProduit: Produit[] = [
    new Produit('sacoche', 'sacoche en cuir', ' c\'est une sacoche en cuir cher !', 4000),
    new Produit(' pantalon', 'pantalon noir ', ' c\'est un beau pantalon noir', 20)
  ];



}
