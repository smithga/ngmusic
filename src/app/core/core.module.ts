import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { coreRouting } from './core.routing';
import { PagerComponent } from './pager/pager.component';
import { LoadingComponent } from './loading/loading.component';
import { BackComponent } from './back/back.component';
import { SearchService } from './search/search.service';

@NgModule({
    imports: [
        BrowserModule,
        coreRouting
    ],
    declarations: [
        PagerComponent,
        LoadingComponent,
        BackComponent
    ],
    providers: [
        SearchService
    ],
    exports: [
        PagerComponent,
        LoadingComponent,
        BackComponent
    ],
    bootstrap: []
})
export class CoreModule { }
