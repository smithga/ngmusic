import { Component, OnInit, HostListener } from '@angular/core';

import { ArtistService } from '../shared/artist.service';
import { Artist } from '../shared/artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private currentPage = 1;
  public artists: Array<Artist>;
  private filter = '';

  constructor(
    public artistService: ArtistService
  ) { }

  ngOnInit() {
    this.loadArtists(1);
  }

  onPageClicked(page: number) {
    this.currentPage = page;
    this.loadArtists(this.currentPage);
  }

  loadArtists(page: number) {
    this.artists = [];
    this.artistService.getAll(this.filter, page, 30).subscribe(result => {
      this.artists = result;
    });
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (ev.srcElement.id === 'search') {
      this.filter = (ev.srcElement as HTMLInputElement).value;
      this.loadArtists(1);
    }
  }

}
