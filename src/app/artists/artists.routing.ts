import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layouts';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'artists',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent, data: { title: 'Artists' } },
            { path: ':artist_id', component: ArtistDetailsComponent, data: { title: 'Artist Details'}}
        ]
    }
];

export const artistsRouting = RouterModule.forRoot(routes);
