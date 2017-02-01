import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { coreRouting } from './core.routing';
import { PagerComponent } from './pager/pager.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    imports: [
        BrowserModule,
        coreRouting
    ],
    declarations: [
        PagerComponent,
        LoadingComponent
    ],
    exports: [
        PagerComponent,
        LoadingComponent
    ],
    bootstrap: []
})
export class CoreModule { }
