import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../core/search/search.service';
import { AlbumService } from '../shared/album.service';
import { Album } from '../shared/album';

@Component({
  selector: 'app-album-home',
  templateUrl: './album-home.component.html',
  styleUrls: ['./album-home.component.css']
})
export class AlbumHomeComponent implements OnInit {
  private currentPage = 1;
  public albums: Array<Album>;
  private filter: string;
  private searchTimeout;

  constructor(
    public albumService: AlbumService,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.loadAlbums(1);

    // Subscribe to search service filter changes
    this.searchService.onFilterChanged.subscribe(filter => {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.filter = filter;
        this.loadAlbums(1);
      }, 500);
    });
  }

  onPageClicked(page: number) {
    this.currentPage = page;
    this.loadAlbums(this.currentPage);
  }

  loadAlbums(page: number) {
    this.albums = [];
    this.albumService.getAll(this.filter, page, 30).subscribe(result => {
      this.albums = result;
    });
  }

  onAlbumClicked(albumId: number) {
    this.router.navigate(['albums', albumId]);
  }

}
