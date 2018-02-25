/*let Produit = function () {
    this.nom = "";
    this.label ="";
    this.description ="";
    this.prix = Math.floor(Math.random() * 10);


};
*/


export class Produit {
    constructor(public nom: string, public label: string, public description: string, public prix: number){}

}

