import {Component, Inject} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Component({
  selector: 'app-paiementfail',
  templateUrl: './paiementFail.component.html',
  styleUrls: ['./paiementFail.component.css'],
})


export class PaiementFailComponent {
  public PrixTotal = 0;

  public identifiantTransaction: string[] = [];

  private _Alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.PrixTotal = this.storage.get('PrixTotal');
    this.identifiantTransaction.join('');
    for (let i = 0; i < 5; i++) {
      const n = Math.floor(Math.random() * 26) + 1;
      this.identifiantTransaction.push(this._Alphabet[n]);
    }

    for (let i = 0; i < 10; i++) {
      const n = Math.floor(Math.random() * 9) + 1;
      this.identifiantTransaction.push(n.toString());
    }

  }


}
