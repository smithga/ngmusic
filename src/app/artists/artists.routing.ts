import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layouts';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistHomeComponent } from './artist-home/artist-home.component';

import { AuthGuardService } from '../auth/shared/auth-guard.service';

const routes: Routes = [
    {
        path: 'artists',
        component: MainLayoutComponent,
        children: [
            { path: '', component: ArtistHomeComponent, data: { title: 'Artists' }, canActivate: [AuthGuardService] },
            { path: ':artist_id', component: ArtistDetailsComponent, data: { title: 'Artist Details' }, canActivate: [AuthGuardService] }
        ]
    }
];

export const artistsRouting = RouterModule.forChild(routes);
