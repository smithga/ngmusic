import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(): Observable<boolean> | boolean {
        if (this.authService.authenticated) {
            return true;
        } else {
            this.router.navigate(['auth/login']);
            return false;
        }
    }

}
