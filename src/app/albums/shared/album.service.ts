import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class AlbumService {
    public loading: boolean = false;
    public albumCount: number;

    constructor(private http: Http) {

    }

    public getCount(filter: string) {
        let odataFilter = filter ? `?&$filter=contains(title,'${filter}') or contains(Artist/name,'${filter}')` : '';
        let url = `${environment.apiUrl}/albums/$count${odataFilter}`;
        return this.http
            .get(url)
            .map(res => res.json());
    }

    public getAll(filter: string, page: number = 1, pageSize: number = 48) {
        this.loading = true;
        this.getCount(filter).subscribe(count => this.albumCount = count);
        let odataFilter = filter ? `$filter=contains(title,'${filter}')  or contains(Artist/name,'${filter}')` : '';
        let url = `${environment.apiUrl}/albums?${odataFilter}&$expand=Artist&$skip=${(page - 1) * pageSize}&$top=${pageSize}`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                return res.json().value;
            });
    }

    public get(albumId: number) {
        this.loading = true;
        let url = `${environment.apiUrl}/albums(${albumId})?$expand=Artist`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                return res.json();
            });
    }

    public getForArtist(artistId: number, page: number = 1, pageSize: number = 48) {
        this.loading = true;
        let url = `${environment.apiUrl}/albums?$expand=Artist&$filter=artist_id eq ${artistId}`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                return res.json().value;
            });
    }

}