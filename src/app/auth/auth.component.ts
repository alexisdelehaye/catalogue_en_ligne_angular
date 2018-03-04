import { Component } from '@angular/core';
import {AuthenticationService} from './auth.service';
import {Router} from '@angular/router';
import {Users} from '../models/Users';
import {AuthGuard} from './auth-guard';

@Component({
  selector : 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [ './auth.component.css' ]
})
export class AuthComponent {
  public model: Users = {username: '', password: ''};

  constructor(private router: Router, private authenticationService: AuthenticationService, private authGuard: AuthGuard) {
  }

  login() {
    console.log(this.model);
    this.authenticationService.login(this.model);
  }

  getHome(): string {
    return 'Login';
  }

  isNotConnected() {
    return !this.authGuard.isConnected();
  }
}
