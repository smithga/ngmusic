import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from '../shared/album.service';
import { Album } from '../shared/album';
import { SongService } from '../../songs/shared/song.service';
import { Song } from '../../songs/shared/song';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  private album: Album = new Album();
  private songs: Array<Song>;

  constructor(
    private albumService: AlbumService,
    private songService: SongService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.loadAlbum(params['albumId']);
    });
  }

  loadAlbum(albumId: number) {
    this.songService.getForAlbum(albumId).subscribe(result => {
      this.songs = result;
    });
    this.albumService.get(albumId).subscribe(result => {
      this.album = result;
    });
  }

}
