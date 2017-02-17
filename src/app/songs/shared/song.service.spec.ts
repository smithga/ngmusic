/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Component } from '@angular/core';

// import { StateService, StateServiceMock, ConfigService, ConfigServiceMock, RouterMock } from '../../core';
import { SongService } from './song.service';
import { Song } from './song';

describe('Song Service', () => {
    let mockBackend: MockBackend;
    let songs: Array<Song>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterModule,
            ],
            providers: [
                SongService,

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
        this.songs = [
            { song_id: 1, album_id: 5, title: 'Hells Bells' },
            { song_id: 2, album_id: 5, title: 'Shoot to Thrill' },
            { song_id: 3, album_id: 5, title: 'What Do You Do For Money' },
            { song_id: 4, album_id: 6, title: 'Chase the Ace' },
            { song_id: 5, album_id: 6, title: 'D.T.' },
            { song_id: 6, album_id: 6, title: 'For Those About to Rock' },
            { song_id: 7, album_id: 6, title: 'Ride On' },
            { song_id: 8, album_id: 6, title: 'Shake Your Foundation' }
        ];
    }));

    it('should create an instance', async(inject([SongService], (service: SongService) => {
        expect(service).toBeTruthy();
    })));

    it('should getForAlbum', async(inject([SongService], (service: SongService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({ body: { value: this.songs.filter(x => x.album_id === 5) } })));
            });

        service.getForAlbum(5).subscribe(result => {
            expect(result.length).toEqual(3);
        });
    })));

});
