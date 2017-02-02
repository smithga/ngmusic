import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class ArtistService {
    public loading: boolean = false;
    public artistCount: number;

    constructor(private http: Http) { }

    public getCount(filter: string) {
        let odataFilter = filter ? `?$filter=contains(name,'${filter}')` : '';
        let url = `${environment.apiUrl}/artists/$count${odataFilter}`;
        return this.http
            .get(url)
            .map(res => res.json());
    }

    public getAll(filter: string, page: number = 1, pageSize: number = 50) {
        this.loading = true;
        this.getCount(filter).subscribe(count => this.artistCount = count);
        let odataFilter = filter ? `$filter=contains(name,'${filter}')` : '';
        let url = `${environment.apiUrl}/artists?${odataFilter}&$orderby=name&$skip=${(page - 1) * pageSize}&$top=${pageSize}`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                return res.json().value
            });
    }

    public get(artistId: number) {
        this.loading = true;
        let url = `${environment.apiUrl}/artists(${artistId})`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                return res.json()
            });
    }
}
