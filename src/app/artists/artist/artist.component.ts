import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Artist} from '../shared/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @Input() artist: Artist;
  @Output() artistClicked: EventEmitter<Number> = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

  clickArtist() {
    this.artistClicked.emit(this.artist.artist_id);
  }

}
