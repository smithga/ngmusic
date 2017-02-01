import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class ArtistService {
    
    constructor(private http: Http) { }

    public getAll(page: number = 1, pageSize: number = 50) {
        let url = `${environment.apiUrl}/artists?page=${page}&pageSize=${pageSize}`;
        return this.http
            .get(url)
            .map(res => res.json());
    }

}