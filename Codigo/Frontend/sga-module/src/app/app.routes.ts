import {Routes} from '@angular/router';

import {AuthGuardService} from './services/auth-guard.service';

export const routes: Routes = [
    {path: 'login', loadChildren: 'app/components/login/login.module#LoginModule'},
    {path: 'home', loadChildren: 'app/components/layout/layout.module#LayoutModule', canActivate: [AuthGuardService]},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
];
