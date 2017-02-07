import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';
import { Artist } from './artist';

@Injectable()
export class ArtistService {
    public loading = false;
    public artistCount: number;

    constructor(private http: Http) { }

    public getAll(filter: string, page = 1, pageSize = 50): Observable<Array<Artist>> {
        this.loading = true;
        const odataFilter = filter ? `$filter=contains(name,'${filter}')` : '';
        const paging = `&$skip=${(page - 1) * pageSize}&$top=${pageSize}`;
        const url = `${environment.apiUrl}/artists?${odataFilter}&$orderby=name${paging}&$count=true`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                const result = res.json();
                this.artistCount = result['@odata.count'];
                return result.value;
            });
    }

    public get(artistId: number): Observable<Artist> {
        this.loading = true;
        const url = `${environment.apiUrl}/artists(${artistId})`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                return res.json();
            });
    }
}
