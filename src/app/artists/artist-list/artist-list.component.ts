import { Component, OnInit } from '@angular/core';

import { ArtistService} from '../shared/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  
  private artists;

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit() {
      this.artistService.getAll().subscribe(result => {
      this.artists = result;
    });
  }

}
