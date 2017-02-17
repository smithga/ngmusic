/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ArtistListComponent } from './artist-list.component';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistService } from '../shared/artist.service';

export class RouterMock {
  public url: string;

  navigateByUrl(url: string) { return url; }
  navigate(url: string) {
    this.url = url;
  }
}

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [
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
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle when artist clicked', async(inject([Router], (router: Router) => {
    component.artistClicked(5);
    expect(router.url).toEqual(['artists', 5]);
  })));  

});
