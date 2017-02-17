/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { CoreModule } from '../../core/core.module';
import { HomeComponent } from './home.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { PagerComponent } from '../../core/pager/pager.component';
import { LoadingComponent } from '../../core/loading/loading.component';
import { AlbumListComponent } from '../album-list/album-list.component';
import { AlbumComponent } from '../album/album.component';
import { AlbumService } from '../shared/album.service';
import { Album } from '../shared/album';

export class RouterMock {
  public url: string;

  navigateByUrl(url: string) { return url; }
  navigate(url: string) {
    this.url = url;
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [
        MainLayoutComponent,
        HomeComponent,
        PagerComponent,
        LoadingComponent,
        AlbumListComponent,
        AlbumComponent
      ],
      providers: [
        AlbumService,

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
    fixture = TestBed.createComponent(HomeComponent);
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
        let albums: Array<Album> = [
          { album_id: 10, artist_id: 5, cover: null, genre: 'rock', title: 'title' },
          { album_id: 11, artist_id: 5, cover: null, genre: 'rock', title: 'title2' },
          { album_id: 12, artist_id: 5, cover: null, genre: 'rock', title: 'title3' }
        ];
        connection.mockRespond(new Response(new ResponseOptions({ body: { value: albums } })));
      });

    component.onPageClicked(2);
    expect(component.albums.length).toEqual(3);
  }));

});
