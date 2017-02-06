import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ArtistService } from '../shared/artist.service';
import { Artist } from '../shared/artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  @Input() artists: Array<Artist>;

  private loading = false;
  private artistCount: number;

  constructor(
    private artistService: ArtistService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.loadArtists(1);
  }

  onPageClicked(page) {
    // this.loadArtists(page);
  }

  artistClicked(artist_id: number) {
    this.router.navigate(['artists', artist_id]);
  }

}
