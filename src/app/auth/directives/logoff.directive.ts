import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Directive({
    selector: '[appLogoff]'
})
export class LogoffDirective {

    constructor(
        private router: Router,
        private authService: AuthService
    ){}

    @HostListener('click', [])
    clicked() {
        this.authService.logoff();
        this.router.navigate(['/auth/login']);
    }
}