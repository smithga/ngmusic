/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
// import { Http, ConnectionBackend, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';
import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';

import { Component } from '@angular/core';

// import { StateService, StateServiceMock, ConfigService, ConfigServiceMock, RouterMock } from '../../core';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

export class RouterMock {
    public url: string;

    navigateByUrl(url: string) { return url; }
    navigate(url: string) {
        this.url = url;
    }
}

describe('AuthGuard Service', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                AuthGuardService,
                AuthService,

                { provide: Router, useClass: RouterMock }
            ]
        });
    }));

    it('should create an instance', async(inject([AuthGuardService], (service: AuthGuardService) => {
        expect(service).toBeTruthy();
    })));

    it('should allow activation', inject([AuthGuardService, AuthService], (service: AuthGuardService, authService: AuthService) => {
        authService.authenticated = true;
        expect(service.canActivate()).toEqual(true);
    }));

    it('should NOT allow activation', inject([AuthGuardService, AuthService, Router],
        (authGuardService: AuthGuardService, authService: AuthService, router: Router) => {
            authService.authenticated = false;
            expect(authGuardService.canActivate()).toEqual(false);
            expect(router.url).toEqual(['auth/login']);
        }));

});
