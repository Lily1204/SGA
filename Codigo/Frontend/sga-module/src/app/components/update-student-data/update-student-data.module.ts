import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {UpdateStudentDataComponent} from './update-student-data.component';
import {TutorsDataComponent} from './tutors-data/tutors-data.component';

@NgModule({
    declarations: [
        UpdateStudentDataComponent,
        TutorsDataComponent
    ],
    imports: [
        RouterModule.forChild([{path: '', component: UpdateStudentDataComponent}]),
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        UpdateStudentDataComponent
    ]
})
export class UpdateStudentDataModule {
}
