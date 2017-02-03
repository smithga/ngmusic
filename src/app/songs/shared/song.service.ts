import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class SongService {
    private loading = false;

    constructor(private http: Http) { }

    public getForAlbum(album_id: number) {
        this.loading = true;
        const url = `${environment.apiUrl}/songs?$orderby=track&$filter=album_id eq ${album_id}`;
        return this.http
            .get(url)
            .map(res => {
                this.loading = false;
                return res.json().value;
            });
    }
}
