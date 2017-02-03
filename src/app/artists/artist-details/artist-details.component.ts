import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AlbumService} from '../../albums/shared/album.service';
import { Album } from '../../albums/shared/album';
import { ArtistService } from '../shared/artist.service';
import { Artist } from '../shared/artist';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  public albums: Array<Album>;
  public artist: Artist;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const artistId = params['artist_id'];
      this.loadAlbums(artistId);
      this.loadArtist(artistId);
    });
  }

  loadAlbums(artistId: number) {
    this.albumService.getForArtist(artistId).subscribe(result => {
      this.albums = result;
    });
  }

  loadArtist(artistId: number) {
    this.artistService.get(artistId).subscribe(result => {
      this.artist = result;
    });
  }

  onAlbumClicked(albumId: number) {
    this.router.navigate(['albums', albumId]);
  }

}
