import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AlbumService } from '../shared/album.service';
import { Album } from '../shared/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  @Input() albums: Array<Album>;
  @Output() albumClicked: EventEmitter<number> = new EventEmitter<number>();

  private albumCount: number;
  private filter: string;

  constructor() { }

  ngOnInit() {

  }

  onAlbumClicked(albumId: number) {
    this.albumClicked.emit(albumId);
  }

}
