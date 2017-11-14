import {Routes} from '@angular/router';

import {LayoutComponent} from './layout.component';
import {HomeComponent} from '../home/home.component';

export const CHILDREN_ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent}
];

export const ROUTES: Routes = [
    {path: 'professor', component: LayoutComponent, children: CHILDREN_ROUTES},
    {path: 'student', component: LayoutComponent, children: CHILDREN_ROUTES}
];
