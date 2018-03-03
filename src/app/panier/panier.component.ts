///<reference path="../produit/produit.component.ts"/>
import {Component, Inject, Input, NgModule, OnInit} from '@angular/core';
import {Produit} from '../models/Produit';
import {Panier} from '../models/Panier';
import {ProduitService} from '../produit.service';
import {ActivatedRoute} from '@angular/router';
import {ProduitComponent} from '../produit/produit.component';
import {nextTick} from 'q';
import {getParentState} from '@angular/core/src/render3/node_manipulation';
import {AccueilComponent} from '../accueil/accueil.component';
import { PersistenceService } from 'angular-persistence';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';



@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})



export class PanierComponent {
  private entree: Produit[];
  testProd: Produit;
  listeProduit: Produit[];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.listeProduit = this.storage.get('PanierFinal');
    for (let i = 0; i < this.storage.get('indice') + 1; i++) {
      if (this.storage.get(i.toString()) != null) {
        this.listeProduit.push(this.storage.get(i.toString()));
      }
    }

  }

}













