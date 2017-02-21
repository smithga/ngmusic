/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { CoreModule } from '../../core/core.module';
import { ArtistHomeComponent } from './artist-home.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { PagerComponent } from '../../core/pager/pager.component';
import { LoadingComponent } from '../../core/loading/loading.component';
import { ArtistListComponent } from '../artist-list/artist-list.component';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistService } from '../shared/artist.service';
import { Artist } from '../shared/artist';
import { SearchService } from '../../core/search/search.service';

export class RouterMock {
  public url: string;

  navigateByUrl(url: string) { return url; }
  navigate(url: string) {
    this.url = url;
  }
}

describe('ArtistHomeComponent', () => {
  let component: ArtistHomeComponent;
  let fixture: ComponentFixture<ArtistHomeComponent>;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        FormsModule
      ],
      declarations: [
        MainLayoutComponent,
        ArtistHomeComponent,
        PagerComponent,
        LoadingComponent,
        ArtistListComponent,
        ArtistComponent
      ],
      providers: [
        ArtistService,
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
    fixture = TestBed.createComponent(ArtistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockBackend = getTestBed().get(MockBackend);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle when page clicked', () => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        let artists: Array<Artist> = [
          { artist_id: 1, name: 'Artist Name 1' },
          { artist_id: 2, name: 'Artist Name 2' },
          { artist_id: 3, name: 'Artist Name 3' }
        ];

        connection.mockRespond(new Response(new ResponseOptions({ body: { value: artists } })));
      });

    component.onPageClicked(3);
    expect(component.artists.length).toEqual(3);
  });

  it('should handle filter changed', async(inject([SearchService], (service: SearchService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        let artists: Array<Artist> = [
          { artist_id: 1, name: 'Artist Name 1' },
          { artist_id: 2, name: 'Artist Name 2' },
          { artist_id: 3, name: 'Artist Name 3' }
        ];
        connection.mockRespond(new Response(new ResponseOptions({ body: { value: artists } })));
      });

    component.onPageClicked(2);
    service.filter = 'test';
    expect(component.artists.length).toEqual(3);
  })));


});
