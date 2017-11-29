import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ProfessorComponent} from './professor.component';

import {StudentViewModule} from './student/student-view.module';

import {ProfessorService} from '../../services/professor.service';

import {ToastModule} from 'ng2-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
        ReactiveFormsModule,
        ToastModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot()
    ],
    exports: [
        ProfessorComponent
    ]
})
export class ProfessorModule {
}
