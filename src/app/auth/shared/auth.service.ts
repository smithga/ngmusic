import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    public authenticated = false;

    constructor() { }

    public login(username: string, password: string): boolean {
        this.username = username;
        this.authenticated = (username === 'a@a.com' && password === 'password');
        return this.authenticated;
    }

    public logoff() {
        this.authenticated = false;
    }

    public get username(): string {
        return window.localStorage.getItem('username') || '';
    }

    public set username(value: string) {
        window.localStorage.setItem('username', value);
    }

    public clearUsername() {
        window.localStorage.removeItem('username');
    }

}
