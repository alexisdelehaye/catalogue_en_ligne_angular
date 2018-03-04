
import {Component, Inject} from '@angular/core';
import {Produit} from '../models/Produit';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {AuthenticationService} from '../auth/auth.service';
import {AuthGuard} from '../auth/auth-guard';
import {Router} from '@angular/router';

@Component({
  selector : 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: [ './accueil.component.css' ]
})

export class  AccueilComponent {
  private sortiePanier: Produit[] = [];
  private indice = this.storage.set('indice', this.storage.get('indice'));

  public listeProduit: Produit[] = [
    new Produit('sacoche', 'sacoche en cuir', ' c\'est une sacoche en cuir cher !', 4000),
    new Produit(' pantalon', 'pantalon noir ', ' c\'est un beau pantalon noir', 20),
    new Produit('test', 'test', 'test', 1),
    new Produit('Inter postulatus', 'Inter postulatus nullo postulatus solitudine', 'Cum ergo Romae est ardore', 50),
    new Produit('Praefecto omnibus omnibus sint praefecto.', 'Ultra prudens aeternam nobilem intentum', 'Cum ergo Romae est ardore', 25),

  ];

  public listePanier: Produit[] = [
    new Produit('produit de l\'accueil', 'test accueil', 'test', 25),
  ];
constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private authService: AuthenticationService,
            private authGuard: AuthGuard, private router: Router) {
  if (this.storage.get('Catalogue') == null) {
    this.storage.set('Catalogue', this.listeProduit);
  }
  this.listeProduit = this.storage.get('Catalogue');
  this.indice = this.storage.get('indice');
  if ( this.storage.get('PanierFinal') == null) {
    this.storage.set('PanierFinal', this.sortiePanier);
  }

}

  isConnected() {
    return this.authGuard.isConnected();
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

  public sendData(model: Produit) {
    this.sortiePanier = this.storage.get('PanierFinal');
    this.sortiePanier.push(model);
    this.storage.set('PanierFinal', this.sortiePanier);

  }
  public supprimerProduit(i: number) {
    this.listeProduit = this.storage.get('Catalogue');
    this.listeProduit.splice(i);
    this.storage.set('Catalogue', this.listeProduit);
    //this.router.navigate(['/home']);

  }
}
