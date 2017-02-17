import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule} from '../core/core.module';
import { SongsModule } from '../songs/songs.module';

import { albumsRouting } from './albums.routing';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumService} from './shared/album.service';
import { AlbumComponent } from './album/album.component';
import { AlbumHomeComponent } from './album-home/album-home.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        albumsRouting,
        CoreModule,
        SongsModule
    ],
    declarations: [
        AlbumListComponent,
        AlbumComponent,
        AlbumHomeComponent,
        AlbumDetailsComponent
    ],
    exports: [
        AlbumListComponent,
        AlbumComponent,
        AlbumHomeComponent,
        AlbumDetailsComponent
    ],
    providers: [
        AlbumService
    ]
})
export class AlbumsModule { }
