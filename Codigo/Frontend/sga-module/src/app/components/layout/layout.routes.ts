import {Routes} from '@angular/router';

import {LayoutComponent} from './layout.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: 'academic-load', loadChildren: 'app/components/academic-load/academic-load.module#AcademicLoadModule'},
            {
                path: 'update-student-data',
                loadChildren: 'app/components/update-student-data/update-student-data.module#UpdateStudentDataModule'
            },
            {path: 'report-card', loadChildren: 'app/components/report-card/report-card.module#ReportCardModule'},
            {path: 'schedule', loadChildren: 'app/components/schedule/schedule.module#ScheduleModule'},
            {path: '', pathMatch: 'full', redirectTo: 'academic-load'}
        ]
    }
];
