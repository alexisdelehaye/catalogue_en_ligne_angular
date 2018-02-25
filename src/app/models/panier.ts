import {Produit} from './Produit';

export class Panier {
  constructor(public listeArticle: Produit[], public prixTot: number, public nombreArt: number) {
  }

  ajouterProduit(Prod : Produit){
    this.listeArticle.push(Prod);
    this.prixTot += Prod.prix;
    this.nombreArt++;

  }
}
