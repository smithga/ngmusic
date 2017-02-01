import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from '../layouts';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }
];

export const coreRouting = RouterModule.forRoot(routes);
