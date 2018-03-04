import {AuthenticationService} from '../auth/auth.service';
import {Component} from '@angular/core';
import {AuthGuard} from '../auth/auth-guard';


@Component({
  selector : 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: [ './logout.component.css' ]
})

export class LogoutComponent {

  constructor(private authenticationService: AuthenticationService, private authGuard: AuthGuard) {

  }
  isNotConnected() {
    return !this.authGuard.isConnected();
  }


  isConnected() {
    return this.authGuard.isConnected();
  }

  deconnexion() {
    this.authenticationService.logout();
    this.isNotConnected();
  }
}
