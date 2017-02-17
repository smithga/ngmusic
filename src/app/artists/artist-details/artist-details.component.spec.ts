/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { APP_BASE_HREF } from '@angular/common';

// Modules
import { AlbumsModule } from '../../albums/albums.module';
import { CoreModule } from '../../core/core.module';
import { SongsModule } from '../../songs/songs.module';

import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { HomeComponent } from '../../core/home/home.component';
import { ArtistDetailsComponent } from './artist-details.component';
import { Album } from '../../albums/shared/album';
import { ArtistService } from '../shared/artist.service';
import { Artist } from '../shared/artist';

export class RouterMock {
  public url: string;

  navigateByUrl(url: string) { return url; }
  navigate(url: string) {
    this.url = url;
  }
}

describe('ArtistDetailsComponent', () => {
  let component: ArtistDetailsComponent;
  let fixture: ComponentFixture<ArtistDetailsComponent>;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        CoreModule,
        AlbumsModule,
        SongsModule
      ],
      declarations: [
        ArtistDetailsComponent,
        MainLayoutComponent,
        HomeComponent
      ],
      providers: [
        ArtistService,

        { provide: APP_BASE_HREF, useValue: '/' },
        // { provide: Router, useClass: RouterMock },
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockBackend = getTestBed().get(MockBackend);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loadAlbums', () => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        let albums: Array<Album> = [
          { album_id: 1, artist_id: 5, cover: null, genre: 'rock', title: 'title' },
          { album_id: 2, artist_id: 5, cover: null, genre: 'rock', title: 'title2' },
          { album_id: 3, artist_id: 5, cover: null, genre: 'rock', title: 'title3' }
        ];

        connection.mockRespond(new Response(new ResponseOptions({ body: { value: albums } })));
      });

    component.loadAlbums(2);
    expect(component.albums.length).toEqual(3);
  });

  it('should loadArtists', () => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        let artist: Artist = { artist_id: 2, name: 'Artist Name' };

        connection.mockRespond(new Response(new ResponseOptions({ body: artist })));
      });

    component.loadArtist(2);
    expect(component.artist.name).toEqual('Artist Name');
  });

  // it('should handle when album is clicked', async(inject([Router], (router: Router) => {
  //   component.onAlbumClicked(5);
  //   expect(router.url).toEqual(['albums', 5]);
  // })));

});
