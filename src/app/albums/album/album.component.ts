import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Album } from '../shared/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album;
  @Output() albumClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.albumClicked.emit(this.album.album_id);
  }

}
