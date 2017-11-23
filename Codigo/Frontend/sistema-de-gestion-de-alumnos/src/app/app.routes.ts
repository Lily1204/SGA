import {Routes} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {LayoutComponent} from './components/layout/layout.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'logging', pathMatch: 'full'},
    {path: 'logging', component: LoginComponent},
    {path: 'student', component: LayoutComponent},
    {path: 'professor', component: LayoutComponent}
];
