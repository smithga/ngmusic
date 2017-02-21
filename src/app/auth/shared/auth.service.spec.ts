/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
// import { Http, ConnectionBackend, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { Router, RouterModule } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';

import { Component } from '@angular/core';

// import { StateService, StateServiceMock, ConfigService, ConfigServiceMock, RouterMock } from '../../core';
import { AuthService } from './auth.service';

describe('Auth Service', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                AuthService,
            ]
        });
    }));

    it('should create an instance', async(inject([AuthService], (service: AuthService) => {
        expect(service).toBeTruthy();
    })));

    it('should login', async(inject([AuthService], (service: AuthService) => {
        expect(service.login('a@a.com', 'password')).toEqual(true);
        expect(service.authenticated).toEqual(true);
    })));

    it('should fail login', async(inject([AuthService], (service: AuthService) => {
        expect(service.login('bad username', 'bad password')).toEqual(false);
        expect(service.authenticated).toEqual(false);
    })));

    it('should logoff', async(inject([AuthService], (service: AuthService) => {
        service.logoff();
        expect(service.authenticated).toEqual(false);
    })));

    it('should get username from localstorage', async(inject([AuthService], (service: AuthService) => {
        service.username = 'testuser';
        expect(service.username).toEqual('testuser');
    })));

    it('should get default username from localstorage', async(inject([AuthService], (service: AuthService) => {
        service.clearUsername();
        expect(service.username).toEqual('');
    })));

});
