import { Component } from '@angular/core';
import {Produit} from '../models/Produit';
import {Panier} from '../models/Panier';
import {selector} from 'rxjs/operator/publish';


@Component({
  selector : 'app-panier',
  templateUrl : './panier.component.html',
  styleUrls : ['./panier.component.css']
})

export class PanierComponent {
  public panier: Panier;


}
