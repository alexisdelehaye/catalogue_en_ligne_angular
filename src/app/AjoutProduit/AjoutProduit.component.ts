import {Produit} from '../models/Produit';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nouveauproduit',
  templateUrl: './AjoutProduit.component.html',
  styleUrls: ['./AjoutProduit.component.css']
})


export class AjoutProduitComponent {
  public NouveauProduit: Produit = new Produit('', '', '', 0);
  private CatalogueCourant: Produit[];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router) {
  }

  ajouterProduit() {//ajoute le produit dans le tableau du catalogue stocké sur le localStorage
    this.CatalogueCourant = this.storage.get('Catalogue');
    this.CatalogueCourant.push(this.NouveauProduit);
    this.storage.set('Catalogue', this.CatalogueCourant);
    this.router.navigate(['/home']);
  }

}
