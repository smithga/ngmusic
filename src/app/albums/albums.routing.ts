import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layouts';
import { HomeComponent } from './home/home.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

import { AuthGuardService } from '../auth/shared/auth-guard.service';

const routes: Routes = [
    {
        path: 'albums',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent, data: { title: 'Albums' }, canActivate:[AuthGuardService] },
            { path: ':albumId', component: AlbumDetailsComponent, data: { title: 'Album Details' }, canActivate:[AuthGuardService] }
        ]
    }
];

export const albumsRouting = RouterModule.forRoot(routes);
