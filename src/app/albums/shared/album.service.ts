import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class AlbumService {
    public loading = false;
    public albumCount: number;

    constructor(
        private http: Http
    ) { }

    public getAll(filter: string, page = 1, pageSize = 48) {
        this.loading = true;
        const odataFilter = filter ? `$filter=contains(title,'${filter}')  or contains(Artist/name,'${filter}')` : '';
        const paging = `&$skip=${(page - 1) * pageSize}&$top=${pageSize}`;
        const url = `${environment.apiUrl}/albums?${odataFilter}&$expand=Artist${paging}&$count=true`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                const result = res.json();
                this.albumCount = result['@odata.count'];
                return result.value;
            });
    }

    public get(albumId: number) {
        this.loading = true;
        const url = `${environment.apiUrl}/albums(${albumId})?$expand=Artist`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                return res.json();
            });
    }

    public getForArtist(artistId: number, page = 1, pageSize = 48) {
        this.loading = true;
        const url = `${environment.apiUrl}/albums?$expand=Artist&$filter=artist_id eq ${artistId}`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                return res.json().value;
            });
    }

}
