import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';

import { songsRouting } from './songs.routing';
import { SongService } from './shared/song.service';
import { SongListComponent } from './song-list/song-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        songsRouting,
        CoreModule
    ],
    declarations: [
        SongListComponent
    ],
    exports: [
        SongListComponent
    ],
    providers: [
        SongService
    ]
})
export class SongsModule { }
