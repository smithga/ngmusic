import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from '../layouts';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent, data: { title: 'Login' } }
        ]
    }
];

export const authRouting = RouterModule.forRoot(routes);
