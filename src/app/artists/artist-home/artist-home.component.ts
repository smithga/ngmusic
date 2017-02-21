import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../core/search/search.service';
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
    public artistService: ArtistService,
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.loadArtists(1);

    // Subscribe to search service filter changes
    this.searchService.onFilterChanged.subscribe(filter => {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.filter = filter;
        this.loadArtists(1);
      }, 500);
    });
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

}
