/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';

export class RouterMock {
    public url: string;

    navigateByUrl(url: string) { return url; }
    navigate(url: string) {
        this.url = url;
    }
}

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [
        MainLayoutComponent
      ],
      providers: [
        { provide: Router, useClass: RouterMock },
        ActivatedRoute
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
