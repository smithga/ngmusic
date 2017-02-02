import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule} from '../core/core.module';

import { songsRouting } from './songs.routing';
import { SongService} from './shared/song.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        songsRouting,
        CoreModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        SongService
    ]
})
export class SongsModule { }
