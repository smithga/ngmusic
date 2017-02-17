import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layouts';
import { AlbumHomeComponent } from './album-home/album-home.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

import { AuthGuardService } from '../auth/shared/auth-guard.service';

const routes: Routes = [
    {
        path: 'albums',
        component: MainLayoutComponent,
        children: [
            { path: '', component: AlbumHomeComponent, data: { title: 'Albums' }, canActivate: [AuthGuardService] },
            { path: ':albumId', component: AlbumDetailsComponent, data: { title: 'Album Details' }, canActivate: [AuthGuardService] }
        ]
    }
];

export const albumsRouting = RouterModule.forChild(routes);
