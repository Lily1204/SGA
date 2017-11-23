import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentViewComponent} from './student-view.component';

@NgModule({
    declarations: [
        StudentViewComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        StudentViewComponent
    ]
})
export class StudentViewModule {}
