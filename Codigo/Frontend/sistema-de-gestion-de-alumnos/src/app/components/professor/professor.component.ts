import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {ProfessorService} from '../../services/professor.service';
import {StudentInterface} from '../../shared/student.interface';

import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-professor',
    templateUrl: './professor.component.html'
})
export class ProfessorComponent implements OnInit {

    students: StudentInterface[];

    studentSelected: number;

    isEditting: boolean;

    isCreating: boolean;

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
        this.professorService.getAllStudents().subscribe(students => {
            this.students = students;
            this.studentSelected = 0;
        }, error => {
            this.students = [{
                id: 0,
                name: 'Julio',
                lastName: 'Perez',
                s_lastName: 'Gracia',
                birthday: '10/12/1995',
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

    selectStudent(id: number) {
        this.studentSelected = id;
        console.log(id);
    }
}
