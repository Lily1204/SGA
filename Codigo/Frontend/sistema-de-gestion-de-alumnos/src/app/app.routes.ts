import {Routes} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {LayoutComponent} from './components/layout/layout.component';

import {UserResolve} from './resolves/user.resolve';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'logging', pathMatch: 'full'},
    {path: 'logging', component: LoginComponent},
    {path: 'student', component: LayoutComponent, resolve: {
        user: UserResolve
    }},
    {path: 'professor', component: LayoutComponent, resolve: {
        user: UserResolve
    }}
];
