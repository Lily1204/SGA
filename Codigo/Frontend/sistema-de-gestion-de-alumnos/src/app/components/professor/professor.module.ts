import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ProfessorComponent} from './professor.component';

import {StudentViewModule} from './student/student-view.module';

import {ProfessorService} from '../../services/professor.service';

@NgModule({
    declarations: [
        ProfessorComponent
    ],
    providers: [
        ProfessorService
    ],
    imports: [
        CommonModule,
        StudentViewModule,
        ReactiveFormsModule
    ],
    exports: [
        ProfessorComponent
    ]
})
export class ProfessorModule {}
