/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';

import { BackComponent } from './back.component';

export class LocationMock {
  public path: string;

  back() {
    this.path = 'wentBack';
  }

  isCurrentPathEqualTo(path: string): boolean {
    return path === this.path;
  }

}

describe('BackComponent', () => {
  let component: BackComponent;
  let fixture: ComponentFixture<BackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BackComponent
      ],
      providers: [
        { provide: Location, useClass: LocationMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go back', async(inject([Location], (location: Location) => {
    component.back();
    expect(location.isCurrentPathEqualTo('wentBack')).toEqual(true);
  })));

});
