/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Component } from '@angular/core';

// import { StateService, StateServiceMock, ConfigService, ConfigServiceMock, RouterMock } from '../../core';
import { ArtistService } from './artist.service';
import { Artist } from './artist';

describe('Artist Service', () => {
    let mockBackend: MockBackend;
    let artists: Array<Artist>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterModule,
            ],
            providers: [
                ArtistService,

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
        this.artists = [
            { artist_id: 5, name: 'AC/DC' }, 
            { artist_id: 6, name: 'Muse' },
            { artist_id: 7, name: 'Judas Priest' },
            { artist_id: 8, name: 'Bing Crosby' }
        ];
    }));

    it('should create an instance', async(inject([ArtistService], (service: ArtistService) => {
        expect(service).toBeTruthy();
    })));

    it('should getAll', async(inject([ArtistService], (service: ArtistService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({ body: { value: this.artists } })));
            });

        service.getAll('').subscribe(result => {
            expect(result.length).toEqual(4);
        });
    })));

    it('should get', async(inject([ArtistService], (service: ArtistService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({ body: this.artists.find(x => x.artist_id == 5) })));
            });

        service.get(12).subscribe(result => {
            expect(result.artist_id).toEqual(5);
            expect(result.name).toEqual('AC/DC');
        });
    })));

});