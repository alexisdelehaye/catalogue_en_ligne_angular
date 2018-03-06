
import {Component, Inject} from '@angular/core';
import {Produit} from '../models/Produit';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {AuthenticationService} from '../auth/auth.service';
import {AuthGuard} from '../auth/auth-guard';
import {Router} from '@angular/router';
import {nextTick} from 'q';

@Component({
  selector : 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: [ './accueil.component.css' ]
})

export class  AccueilComponent {
  get listeProduit(): Produit[] {
    return this._listeProduit;
  }

  set listeProduit(value: Produit[]) {
    this._listeProduit = value;
  }
  private sortiePanier: Produit[] = [];
  private indice = this.storage.set('indice', this.storage.get('indice'));

  private _listeProduit: Produit[] = [
    new Produit('Cervicibus inquam', 'Cervicibus inquam refertissimam Mithridaticos inquam.', 'Exustus Luscus eosque heiulans audaces haut haut vocibus exustus expediendum.', Math.floor(Math.random() * 500) ),
    new Produit('Vel solo', 'Vel solo aut partes enim', 'Distributo cogitabatur locata tuto in et opera consulta ne insidiarum.', Math.floor(Math.random() * 500)),
    new Produit('Romae innumeram ', 'Romae innumeram haec pendentem videre.', 'Profecto saepe et domi incidere in in ut hominum odio.', Math.floor(Math.random() * 500)),
    new Produit('Postulatus', 'Inter postulatus nullo', 'Cum ergo Romae', Math.floor(Math.random() * 500)),
    new Produit('Praefecto omnibus omnibus', 'Ultra prudens aeternam', 'Cum ergo Romae', Math.floor(Math.random() * 500)),
    new Produit('Pendere si filo', 'Pendere si filo simulantium periclitetur.', 'Tamquam honestus exoptatus primitus tenuem observantem antea paeniteat summatem introieris.', Math.floor(Math.random() * 500)),
    new Produit('Et et aliquotiens', 'Et et aliquotiens dignitatem dignitatem', 'A carinae templo Paphus autem eadem duae altera urbes abundat', Math.floor(Math.random() * 500)),
    new Produit('Natura autem', 'Natura autem in maxime ipsa', 'Descripsisse codicem artium filius aiunt iussus sperabatur Baeticae traditus Maximino.', Math.floor(Math.random() * 500)),
    new Produit('Agens atque pondera', 'Agens atque pondera oriente liquido', 'Discrepantes nec nec profecto eluxisse victu severitate multiplicantes in nec', Math.floor(Math.random() * 500)),
    new Produit('Isdem vel', 'Isdem vel transitu aliquos legiones', 'Videntur Ennius quam amicitiae quam inventu plerisque ubi difficiles Quid', Math.floor(Math.random() * 500)),
    new Produit('Vel uxor', 'Vel uxor temporis avida sibi', 'Gentium imperator ad imperator ratione maxime vigilasse pacem in icto', Math.floor(Math.random() * 500))

  ];

constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private authService: AuthenticationService,
            private authGuard: AuthGuard, private router: Router) {
  this.storage.set('Catalogue', this._listeProduit);
  if (this.storage.get('Catalogue')[0] == null) {
    this.storage.set('Catalogue', this._listeProduit);
  }
  this._listeProduit = this.storage.get('Catalogue');
  this.indice = this.storage.get('indice');
  if ( this.storage.get('PanierFinal') == null) {
    this.storage.set('PanierFinal', this.sortiePanier);
  }

}

  isConnected() {
    return this.authGuard.isConnected();
  }


  public sendData(model: Produit) {
    this.sortiePanier = this.storage.get('PanierFinal');
    this.sortiePanier.push(model);
    this.storage.set('PanierFinal', this.sortiePanier);

  }
  public supprimerProduit(i: number) {
    if (i != 0) {
      this._listeProduit = this.storage.get('Catalogue');
      this._listeProduit.splice(i, 1);
      this.storage.set('Catalogue', this._listeProduit);
      this.router.navigate(['/home']);
    } else {
      this._listeProduit.shift();
      this.storage.set('Catalogue', this._listeProduit);
      this.router.navigateByUrl('/home');
    }
  }
}
