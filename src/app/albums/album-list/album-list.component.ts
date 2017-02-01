import { Component, OnInit } from '@angular/core';

import { AlbumService } from '../shared/album.service';
import { Album } from '../shared/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  private loading: boolean = false;
  private albums: Array<Album>;
  private albumCount: number;

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.loadAlbums(1);
  }

  onPageClicked(page) {
    this.loadAlbums(page);
  }

  loadAlbums(page) {
    this.loading = true;
    this.albumService.getAll(page, 30).subscribe(result => {
      this.albums = result;
      this.loading = false;
      this.albumCount = this.albumService.count;
    });
  }

}
