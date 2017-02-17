/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtistComponent } from './artist.component';
import { Artist } from '../shared/artist';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle when artist is clicked', async(() => {
    let artist: Artist = { artist_id: 5, name: 'Artist 5' };
    component.artist = artist;
    component.artistClicked.subscribe(result => {
      expect(result).toEqual(5);
    });
    component.clickArtist();
  }));

});
