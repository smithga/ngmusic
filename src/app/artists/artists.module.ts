import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AlbumsModule} from '../albums/albums.module';

import { artistsRouting } from './artists.routing';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistService} from './shared/artist.service';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        artistsRouting,
        CoreModule,
        AlbumsModule
    ],
    declarations: [
        ArtistListComponent,
        ArtistDetailsComponent,
        HomeComponent
    ],
    exports: [
        ArtistListComponent
    ],
    providers: [
        ArtistService
    ]
})
export class ArtistsModule { }
