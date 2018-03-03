
import {Component, Inject} from '@angular/core';
import {Produit} from '../models/Produit';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector : 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: [ './accueil.component.css' ]
})

export class  AccueilComponent {
  private indice = this.storage.set('indice', this.storage.get('indice'));

  private PanierVide: Produit[] = [
    new Produit('test', 'test', 'test', 1)
  ];

  public listeProduit: Produit[] = [
    new Produit('sacoche', 'sacoche en cuir', ' c\'est une sacoche en cuir cher !', 4000),
    new Produit(' pantalon', 'pantalon noir ', ' c\'est un beau pantalon noir', 20),
    new Produit('test', 'test', 'test', 1)
  ];

  public listePanier: Produit[] = [
    new Produit('produit de l\'accueil', 'test accueil', 'test', 25),
  ];
constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  this.indice = this.storage.get('indice');
  this.storage.set('PanierFinal', this.PanierVide);

}

}
