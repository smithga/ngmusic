/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';

import { SongListComponent } from './song-list.component';
import { SongService } from '../shared/song.service';
import { Song } from '../shared/song';

describe('SongListComponent', () => {
  let mockBackend: MockBackend;
  let component: SongListComponent;
  let fixture: ComponentFixture<SongListComponent>;
  const songs: Array<Song> = new Array<Song>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SongListComponent
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
    })
      .compileComponents();
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

  beforeEach(() => {
  });

  it('should create', async(() => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({ body: { value: this.songs.filter(x => x.album_id === 5) } })));
      });

    // GS:  This needs to be here instead of in the beforeEach method since we need to
    //      inject our mockBackend prior to the component creation.
    fixture = TestBed.createComponent(SongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.albumId = 2;
    expect(component).toBeTruthy();
    expect(component.songs.length).toEqual(3);
  }));

});
