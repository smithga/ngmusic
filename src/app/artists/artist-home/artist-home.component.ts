import { Component, OnInit, HostListener } from '@angular/core';

import { ArtistService } from '../shared/artist.service';
import { Artist } from '../shared/artist';

@Component({
  selector: 'app-artist-home',
  templateUrl: './artist-home.component.html',
  styleUrls: ['./artist-home.component.css']
})
export class ArtistHomeComponent implements OnInit {
  private currentPage = 1;
  public artists: Array<Artist>;
  private filter = '';
  private searchTimeout;

  constructor(
    public artistService: ArtistService
  ) { }

  ngOnInit() {
    if (document.getElementById('search') as HTMLInputElement) {
      this.filter = (document.getElementById('search') as HTMLInputElement).value;
    }
    this.loadArtists(1);
  }

  onPageClicked(page: number) {
    this.currentPage = page;
    this.loadArtists(this.currentPage);
  }

  loadArtists(page: number) {
    this.artists = [];
    this.artistService.getAll(this.filter, page, 32).subscribe(result => {
      this.artists = result;
    });
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (ev.srcElement.id === 'search') {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.filter = (ev.srcElement as HTMLInputElement).value;
        this.loadArtists(1);
      }, 500);
    }
  }

}