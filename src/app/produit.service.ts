import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Produit} from './models/Produit';

@Injectable()
export class ProduitService {

  // Observable string sources
  private ProduitPanier = new Subject<Produit>();


  // Observable string streams
  ProduitAnnounced$ = this.ProduitPanier.asObservable();


  // Service message commands
  AjouterPanier(Prod: Produit) {
    this.ProduitPanier.next(Prod);
  }
}

