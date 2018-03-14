import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AcademicLoadItemComponent} from './academic-load-item.component';

@NgModule({
    declarations: [
        AcademicLoadItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AcademicLoadItemComponent
    ]
})
export class AcademicLoadItemModule {}
