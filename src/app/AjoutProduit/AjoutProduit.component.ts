import {Produit} from '../models/Produit';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Component, Inject} from '@angular/core';

@Component({
  selector : 'app-nouveauproduit',
  templateUrl: './AjoutProduit.component.html',
  styleUrls: [ './AjoutProduit.component.css' ]
})


export class AjoutProduitComponent {
    public NouveauProduit: Produit = new Produit('', '', '', 0);
    private CatalogueCourant: Produit[];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  ajouterProduit() {
    this.CatalogueCourant = this.storage.get('Catalogue');
    this.CatalogueCourant.push(this.NouveauProduit);
    this.storage.set('Catalogue', this.CatalogueCourant);
  }

}
