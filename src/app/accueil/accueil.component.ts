
import {Component, Inject} from '@angular/core';
import {Produit} from '../models/Produit';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector : 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: [ './accueil.component.css' ]
})

export class  AccueilComponent {
  private sortiePanier: Produit[];
  private indice = this.storage.set('indice', this.storage.get('indice'));

  private PanierVide: Produit[] = [
    new Produit('test', 'test', 'test', 1)
  ];

  public listeProduit: Produit[] = [
    new Produit('sacoche', 'sacoche en cuir', ' c\'est une sacoche en cuir cher !', 4000),
    new Produit(' pantalon', 'pantalon noir ', ' c\'est un beau pantalon noir', 20),
    new Produit('test', 'test', 'test', 1),
    new Produit('Inter postulatus', 'Inter postulatus nullo postulatus solitudine', 'Cum ergo Romae est ardore', 50),
    new Produit('Praefecto omnibus omnibus sint praefecto.', 'Ultra prudens aeternam nobilem intentum', 'Cum ergo Romae est ardore', 25),

  ];

  public listePanier: Produit[] = [
    new Produit('produit de l\'accueil', 'test accueil', 'test', 25),
  ];
constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  this.indice = this.storage.get('indice');
  if ( this.storage.get('PanierFinal') == null) {
    this.storage.set('PanierFinal', this.PanierVide);
  }

}


  public sendData(model: Produit) {
    this.sortiePanier = this.storage.get('PanierFinal');
    this.sortiePanier.push(model);
    this.storage.set('PanierFinal', this.sortiePanier);

  }
}
