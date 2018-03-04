import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './auth.service';
import * as moment from 'moment';
import {Token} from '../models/Token';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('token')) {
            const token: Token = JSON.parse(localStorage.getItem('token'));
            const exp = moment(token.exp, 'YYYY-MM-DD HH:mm:ss');
            const now = moment();

            if (now > exp) {
                this.authService.logout();
                this.router.navigateByUrl('/home', { skipLocationChange: true });
                return false;
            }

            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.authService.logout();
        this.router.navigateByUrl('/', { skipLocationChange: true });
        return false;
    }

    isConnected(){
        if (localStorage.getItem('token')) {
            const token : Token = JSON.parse(localStorage.getItem('token'));
            const exp = moment(token.exp, 'YYYY-MM-DD HH:mm:ss');
            const now = moment();

            if (now > exp) {
                this.authService.logout();
                return false;
            }

            // logged in so return true
            return true;
        }

        return false;
    }
}
