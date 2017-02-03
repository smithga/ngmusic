import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { authRouting } from './auth.routing';
import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoffDirective } from './directives/logoff.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        authRouting
    ],
    declarations: [
        LoginComponent,
        LogoffDirective
    ],
    exports: [
        LoginComponent,
        LogoffDirective
    ],
    providers: [
        AuthService,
        AuthGuardService
    ]
})
export class AuthModule { }
