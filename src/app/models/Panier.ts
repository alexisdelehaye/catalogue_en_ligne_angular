import {Produit} from './Produit';

export class Panier {
  constructor(public listeArticle: Produit[], public prixTot: number, public nombreArt: number) {
  }
}

