import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthenticationService, private authGuard: AuthGuard){

  }

  getName() {
    return 'Angular';
  }

  reroute(newRoute: string) {
    if (newRoute == 'home') this.router.navigateByUrl('/home', { skipLocationChange: false });
    if (newRoute == 'panier') this.router.navigateByUrl('/panier', { skipLocationChange: false });
  }

  isConnected() {
    return this.authGuard.isConnected();
  }

  logout(){
    this.authService.logout();
    window.location.reload();
  }
}
