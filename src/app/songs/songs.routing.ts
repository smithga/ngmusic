import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layouts';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'songs',
        component: MainLayoutComponent,
        children: [
            // { path: '', component: HomeComponent, data: { title: 'Albums' } }
        ]
    }
];

export const songsRouting = RouterModule.forRoot(routes);
