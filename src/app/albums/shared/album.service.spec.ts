/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Component } from '@angular/core';

// import { StateService, StateServiceMock, ConfigService, ConfigServiceMock, RouterMock } from '../../core';
import { AlbumService } from './album.service';
import { Album } from './album';

describe('Album Service', () => {
    let mockBackend: MockBackend;
    const albums: Array<Album> = new Array<Album>();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterModule,
            ],
            providers: [
                AlbumService,

                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });
        mockBackend = getTestBed().get(MockBackend);
        // Test data
        this.albums = [
            { album_id: 10, artist_id: 5, cover: null, genre: 'Rock', title: 'Who Made Who' },
            { album_id: 11, artist_id: 5, cover: null, genre: 'Rock', title: 'Back in Black' },
            { album_id: 12, artist_id: 6, cover: null, genre: 'Heavy Metal', title: 'Defenders of the Faith' },
            { album_id: 13, artist_id: 7, cover: null, genre: 'Easy Listening', title: 'Nothing But the Best' }
        ];
    }));

    it('should create an instance', async(inject([AlbumService], (service: AlbumService) => {
        expect(service).toBeTruthy();
    })));

    it('should getAll', async(inject([AlbumService], (service: AlbumService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({ body: { value: this.albums } })));
            });

        service.getAll('').subscribe(result => {
            expect(result.length).toEqual(4);
        });
    })));

    it('should get', async(inject([AlbumService], (service: AlbumService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({ body: this.albums.find(x => x.album_id === 12) })));
            });

        service.get(12).subscribe(result => {
            expect(result.album_id).toEqual(12);
            expect(result.title).toEqual('Defenders of the Faith');
        });
    })));

    it('should getForArtist', async(inject([AlbumService], (service: AlbumService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({ body: { value: this.albums.filter(x => x.artist_id === 5) } })));
            });

        service.getForArtist(5).subscribe(result => {
            expect(result.length).toEqual(2);
        });
    })));

});
