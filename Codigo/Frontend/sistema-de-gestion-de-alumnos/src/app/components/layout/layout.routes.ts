import {Routes} from '@angular/router';

import {LayoutComponent} from './layout.component';
import {ProfessorComponent} from '../professor/professor.component';

import {ProfessorResolve} from '../../resolves/professor.resolve';
import {StudentViewComponent} from '../professor/student/student-view.component';

export const CHILDREN_ROUTES_FOR_PROFESSOR: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home', component: ProfessorComponent, resolve: {
        user: ProfessorResolve
    }
    },
    {path: 'home/student/:id', component: StudentViewComponent}
];

export const CHILDREN_ROUTES_FOR_STUDENT: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ProfessorComponent}
];

export const ROUTES: Routes = [
    {path: 'professor', component: LayoutComponent, children: CHILDREN_ROUTES_FOR_PROFESSOR},
    {path: 'student', component: LayoutComponent, children: CHILDREN_ROUTES_FOR_STUDENT}
];
