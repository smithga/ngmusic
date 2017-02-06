import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from '../layouts';

import { AuthGuardService } from '../auth/shared/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }
];

export const coreRouting = RouterModule.forChild(routes);
