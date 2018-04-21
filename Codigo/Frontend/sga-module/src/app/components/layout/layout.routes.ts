/**
 * Archivo de rutas internas
 **/

/**
 * Librerias por default de angular
 * */
import {Routes} from '@angular/router';
/**
 * Componente de Layout
 * */
import {LayoutComponent} from './layout.component';

/**
 * Exportacion de la constante "routes", el cual
 * es un arreglo de la clase "Routes"
 * */
export const routes: Routes = [
    {
        /**
         * Subruta principal, indica que todas las
         * */
        path: '', component: LayoutComponent, children: [
            /**
             * Subrutas que seran cargadas
             * */
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
