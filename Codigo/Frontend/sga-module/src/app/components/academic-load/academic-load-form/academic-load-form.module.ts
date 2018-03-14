import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AcademicLoadFormComponent} from './academic-load-form.component';

import {AcademicLoadItemModule} from './academic-load-item/academic-load-item.module';

@NgModule({
    declarations: [
        AcademicLoadFormComponent
    ],
    imports: [
        AcademicLoadItemModule,
        CommonModule
    ],
    exports: [
        AcademicLoadFormComponent
    ]
})
export class AcademicLoadFormModule {}
