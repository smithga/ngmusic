/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { CoreModule } from '../../core/core.module';
import { AlbumHomeComponent } from './album-home.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { PagerComponent } from '../../core/pager/pager.component';
import { LoadingComponent } from '../../core/loading/loading.component';
import { AlbumListComponent } from '../album-list/album-list.component';
import { AlbumComponent } from '../album/album.component';
import { AlbumService } from '../shared/album.service';
import { Album } from '../shared/album';
import { SearchService } from '../../core/search/search.service';

export class RouterMock {
  public url: string;

  navigateByUrl(url: string) { return url; }
  navigate(url: string) {
    this.url = url;
  }
}

describe('AlbumHomeComponent', () => {
  let component: AlbumHomeComponent;
  let fixture: ComponentFixture<AlbumHomeComponent>;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        FormsModule
      ],
      declarations: [
        MainLayoutComponent,
        AlbumHomeComponent,
        PagerComponent,
        LoadingComponent,
        AlbumListComponent,
        AlbumComponent
      ],
      providers: [
        AlbumService,
        SearchService,

        { provide: Router, useClass: RouterMock },
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
    fixture = TestBed.createComponent(AlbumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockBackend = getTestBed().get(MockBackend);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle page clicked', async(() => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        const albums: Array<Album> = [
          { album_id: 10, artist_id: 5, cover: null, genre: 'rock', title: 'title' },
          { album_id: 11, artist_id: 5, cover: null, genre: 'rock', title: 'title2' },
          { album_id: 12, artist_id: 5, cover: null, genre: 'rock', title: 'title3' }
        ];
        connection.mockRespond(new Response(new ResponseOptions({ body: { value: albums } })));
      });

    component.onPageClicked(2);
    expect(component.albums.length).toEqual(3);
  }));

  it('should handle page clicked', async(inject([Router], (router: Router) => {
    component.onAlbumClicked(5);
    expect(router.url).toEqual(['albums', 5]);
  })));

  it('should handle filter changed', async(inject([SearchService], (service: SearchService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        const albums: Array<Album> = [
          { album_id: 10, artist_id: 5, cover: null, genre: 'rock', title: 'title' },
          { album_id: 11, artist_id: 5, cover: null, genre: 'rock', title: 'title2' },
          { album_id: 12, artist_id: 5, cover: null, genre: 'rock', title: 'title3' }
        ];
        connection.mockRespond(new Response(new ResponseOptions({ body: { value: albums } })));
      });

    component.onPageClicked(2);
    service.filter = 'test';
    expect(component.albums.length).toEqual(3);
  })));


});
