import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layouts';
import { ArtistListComponent } from './artist-list/artist-list.component';

const routes: Routes = [
    {
        path: 'artists',
        component: MainLayoutComponent,
        children: [
            { path: '', component: ArtistListComponent, data: { title: 'Artists' } }
        ]
    }
];

export const artistsRouting = RouterModule.forRoot(routes);
