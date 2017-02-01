import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class AlbumService {

    public count: number;

    constructor(private http: Http) { 

    }

    public getCount() {
        let url = `${environment.apiUrl}/albums/count`;
        return this.http
            .get(url)
            .map(res => res.json());        
    }

    public getAll(page: number = 1, pageSize: number = 48) {
        this.getCount().subscribe(count => this.count = count);
        let url = `${environment.apiUrl}/albums?page=${page}&pageSize=${pageSize}`;
        return this.http
            .get(url)
            .map(res => res.json());
    }

}