import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    if (document.getElementById('search') as HTMLInputElement) {
      this.filter = (document.getElementById('search') as HTMLInputElement).value;
    }
    this.loadAlbums(1);
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

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (!this.filter) {
      return;
    }
    if (ev.srcElement.id === 'search') {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.filter = (ev.srcElement as HTMLInputElement).value;
        this.loadAlbums(1);
      }, 500);
    }
  }

  onAlbumClicked(albumId: number) {
    this.router.navigate(['albums', albumId]);
  }

}