import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    
    constructor(private http: Http) { }

    public login(username: string, password: string): boolean {
        return (username === 'a@a.com' && password === 'password');
    }

}