import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule} from '../core/core.module';

import { albumsRouting } from './albums.routing';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumService} from './shared/album.service';
import { AlbumComponent } from './album/album.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        albumsRouting,
        CoreModule
    ],
    declarations: [
        AlbumListComponent,
        AlbumComponent
    ],
    exports: [
        AlbumListComponent
    ],
    providers: [
        AlbumService
    ]
})
export class AlbumsModule { }
