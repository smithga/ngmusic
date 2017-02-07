import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from '../shared/album.service';
import { Album } from '../shared/album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  public album: Album = new Album();
  public albumId: number;

  constructor(
    private albumService: AlbumService,

    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.albumId = params['albumId'];
      this.loadAlbum();
    });
  }

  loadAlbum() {
    this.albumService.get(this.albumId).subscribe(result => {
      this.album = result;
    });
  }

}
