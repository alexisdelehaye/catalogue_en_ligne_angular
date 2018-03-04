
import {Component, Input, Output, EventEmitter, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgModule} from '@angular/core';
import {Produit} from '../models/Produit';
import {Panier} from '../models/Panier';
import {PanierComponent} from '../panier/panier.component';
import {AccueilComponent} from '../accueil/accueil.component';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector : 'app-produit',
  templateUrl : './produit.component.html',
  styleUrls: [ './produit.component.css' ],
})

@NgModule({
  imports : [],
  declarations : [PanierComponent],
  providers: []

})


export class ProduitComponent {
  public model: Produit;
  private sortiePanier: Produit[];
  private indexModel: string;
  private indice: number;



  public listeProduit: Produit[];




  constructor(private route: ActivatedRoute, @Inject(LOCAL_STORAGE) private storage: WebStorageService ) {
  this.listeProduit = this.storage.get('Catalogue');
    let myId = '';
    this.route.params.subscribe(params => {
      myId = params['id'];
    });

    this.model = this.listeProduit[myId];
    this.indexModel =  myId;
  }

  public sendData(model: Produit) {
    /*
    this.indice = this.storage.get('indice');
    while (this.storage.get(this.indice.toString()) != null) {
      this.indice++;
    }
    this.sortiePanier.push(model);
    this.storage.set(this.indice.toString(), model);
    this.storage.set('indice', this.indice);
    */
    this.sortiePanier = this.storage.get('PanierFinal');
    this.sortiePanier.push(model);
    this.storage.set('PanierFinal', this.sortiePanier);


  }
}









