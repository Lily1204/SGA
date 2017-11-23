import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import * as _ from 'underscore';

import {ProfessorService} from '../../services/professor.service';
import {StudentInterface} from '../../shared/student.interface';

import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-professor',
    templateUrl: './professor.component.html'
})
export class ProfessorComponent implements OnInit {

    students: StudentInterface[];

    studentToEdit: StudentInterface;

    studentSelected: number;

    anyChange: boolean;

    isEditing: boolean;

    isCreating: boolean;

    isSaving: boolean;

    form: FormGroup;

    constructor(fb: FormBuilder,
                private professorService: ProfessorService,
                private userService: UserService,
                private router: Router) {
        if (!this.userService.isAuthenticate()) {
            this.router.navigate(['/logging']);
        }

        this.form = fb.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            s_lastName: ['', Validators.required],
            birthday: ['', Validators.required],
            bloodType: ['', Validators.required],
            status: ['', Validators.required],
            semester: ['', Validators.required],
            idinge: ['', Validators.required]
        });


    }

    ngOnInit(): void {
        this.form.valueChanges.subscribe(value => this.anyChange = !_.isEqual(value, this.studentToEdit));
        this.professorService.getAllStudents().subscribe(students => {
            this.students = students;
            this.studentSelected = 0;
        }, error => {
            this.students = [{
                id: 0,
                name: 'Julio',
                lastName: 'Perez',
                s_lastName: 'Gracia',
                birthday: '1995-12-10',
                bloodType: 'Desconocido',
                status: 'Soltero',
                semester: '5',
                idinge: 0
            }, {
                id: 1,
                name: 'Damian',
                lastName: 'Zamora',
                s_lastName: 'Celiseo',
                birthday: 'Desconocido',
                bloodType: 'Desconocido',
                status: 'Soltero',
                semester: '5',
                idinge: 0
            }];
            this.studentSelected = 0;
        })
        ;
    }

    onCancel() {
        this.isEditing = false;
        this.isCreating = false;
        this.studentToEdit = null;
        if (this.students) {
            this.studentSelected = 0;
        }
    }

    onCreate() {
        this.form.reset();
        this.isCreating = true;
        this.studentSelected = -1;
    }

    onEdit(studentToEdit: StudentInterface) {
        this.isEditing = true;
        this.studentToEdit = studentToEdit;
        this.form.patchValue(studentToEdit);
    }

    onDelete(id: number) {
        console.log(id);
    }

    onSave(id: number) {
        console.log(id);
    }

    selectStudent(id: number) {
        this.studentSelected = id;
    }
}
