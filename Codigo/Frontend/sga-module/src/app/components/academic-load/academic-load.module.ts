import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AcademicLoadComponent} from './academic-load.component';

@NgModule({
    declarations: [
        AcademicLoadComponent
    ],
    imports: [
        RouterModule.forChild([{path: '', component: AcademicLoadComponent}])
    ],
    exports: [
        AcademicLoadComponent
    ]
})
export class AcademicLoadModule {}
