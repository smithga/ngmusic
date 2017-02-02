import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumService } from '../shared/album.service';
import { Album } from '../shared/album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private currentPage: number = 1;
  private albums: Array<Album>;
  private filter: string;

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit() {
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
    if (ev.srcElement.id === "search") {
      this.filter = (ev.srcElement as HTMLInputElement).value;
      this.loadAlbums(1);
    }
  }

  onAlbumClicked(albumId: number) {
    this.router.navigate(['albums', albumId]);
  }

}
