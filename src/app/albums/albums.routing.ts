import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layouts';
import { HomeComponent } from './home/home.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routes: Routes = [
    {
        path: 'albums',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent, data: { title: 'Albums' } },
            { path: ':albumId', component: AlbumDetailsComponent, data: { title: 'Album Details' } }
        ]
    }
];

export const albumsRouting = RouterModule.forRoot(routes);
