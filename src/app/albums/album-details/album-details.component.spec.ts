/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { APP_BASE_HREF } from '@angular/common';

// Modules
import { CoreModule } from '../../core/core.module';
import { SongsModule } from '../../songs/songs.module';

import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { HomeComponent } from '../../core/home/home.component';
import { AlbumDetailsComponent } from './album-details.component';
import { AlbumService } from '../shared/album.service';
import { Album } from '../shared/album';

describe('AlbumDetailsComponent', () => {
  let component: AlbumDetailsComponent;
  let fixture: ComponentFixture<AlbumDetailsComponent>;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SongsModule,
        RouterModule,
        FormsModule
      ],
      declarations: [
        AlbumDetailsComponent,
        MainLayoutComponent,
        HomeComponent
      ],
      providers: [
        AlbumService,

        { provide: APP_BASE_HREF, useValue: '/' },
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
    fixture = TestBed.createComponent(AlbumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockBackend = getTestBed().get(MockBackend);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load album', async(() => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        const album: Album = { album_id: 10, artist_id: 5, cover: null, genre: 'rock', title: 'title' };

        connection.mockRespond(new Response(new ResponseOptions({ body: album })));
      });

    component.albumId = 5;
    component.loadAlbum();
    expect(component.album.album_id).toEqual(10);
  }));

});
