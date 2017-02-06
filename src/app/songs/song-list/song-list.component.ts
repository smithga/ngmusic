import { Component, OnInit, Input } from '@angular/core';

import { SongService } from '../../songs/shared/song.service';
import { Song } from '../../songs/shared/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  @Input() albumId: number;
  
  public songs: Array<Song>;

  constructor(
    private songService: SongService
  ) { }

  ngOnInit() {
    this.songService.getForAlbum(this.albumId).subscribe(result => {
      this.songs = result;
    });
  }

}
