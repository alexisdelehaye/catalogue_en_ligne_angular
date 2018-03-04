import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import {Users, Token} from '../models/Models';
import * as moment from 'moment';

@Injectable()
export class AuthenticationService {

    constructor(private router: Router) {
    }

    login(model: Users) {
      console.log(model);
      if (model.username == 'admin' && model.password == 'admin') {
        const now = moment();
        const expDate = now.add('30', 'minutes');
        const token: Token = {
          'token': 'myincredibletoken',
          'exp': expDate.format('YYYY-MM-DD HH:mm:ss')
        };
        localStorage.setItem('token', JSON.stringify(token));
        this.router.navigate(['/home']);

      }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
      this.router.navigate(['/home']);
    }
}
