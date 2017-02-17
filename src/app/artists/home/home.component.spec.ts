/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { ArtistListComponent } from '../artist-list/artist-list.component';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistService } from '../shared/artist.service';

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
        ArtistListComponent,
        ArtistComponent
      ],
      providers: [
        ArtistService,

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
