import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layouts';
import { AlbumListComponent } from './album-list/album-list.component';

const routes: Routes = [
    {
        path: 'albums',
        component: MainLayoutComponent,
        children: [
            { path: '', component: AlbumListComponent, data: { title: 'Albums' } }
        ]
    }
];

export const albumsRouting = RouterModule.forRoot(routes);
