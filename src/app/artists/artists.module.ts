import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { artistsRouting } from './artists.routing';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistService} from './shared/artist.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        artistsRouting
    ],
    declarations: [
        ArtistListComponent
    ],
    exports: [
        ArtistListComponent
    ],
    providers: [
        ArtistService
    ]
})
export class ArtistsModule { }
