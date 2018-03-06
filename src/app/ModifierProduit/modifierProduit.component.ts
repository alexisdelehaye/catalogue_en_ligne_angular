import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Produit} from '../models/Produit';

@Component({
  selector : 'app-modifierproduit',
  templateUrl: './modifierProduit.component.html',
  styleUrls: [ './modifierProduit.component.css' ]
})


export class ModifierProduitComponent {

  public ProduitCourant: Produit;
  private CatalogueCourant: Produit[];
  private indiceProd;

  constructor(private route: ActivatedRoute, @Inject(LOCAL_STORAGE) private storage: WebStorageService,  private router: Router) {
    this.CatalogueCourant = this.storage.get('Catalogue');
    let myId = '';
    this.route.params.subscribe(params => {
      myId = params['id'];
    });

    this.ProduitCourant = this.CatalogueCourant[myId];
    this.indiceProd = myId;
  }

  ModifierProduit() { //modifie le produit récupérer par l'indice envoyé avec un router-link
    this.CatalogueCourant = this.storage.get('Catalogue');
    this.CatalogueCourant[this.indiceProd] = this.ProduitCourant;
    this.storage.set('Catalogue', this.CatalogueCourant);
    this.router.navigate(['/home']);
  }
}



