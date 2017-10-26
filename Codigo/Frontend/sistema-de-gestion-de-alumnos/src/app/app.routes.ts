import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'logging', pathMatch: 'full'},
    {path: 'logging', component: LoginComponent}
];
