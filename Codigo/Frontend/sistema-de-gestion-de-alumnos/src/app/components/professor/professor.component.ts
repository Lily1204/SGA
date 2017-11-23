import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import * as _ from 'underscore';

import {ToastsManager} from 'ng2-toastr';

import {ProfessorService} from '../../services/professor.service';
import {UserService} from '../../services/user.service';

import {StudentInterface} from '../../shared/student.interface';


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

    constructor(private professorService: ProfessorService,
                private userService: UserService,
                private router: Router,
                public toast: ToastsManager,
                vcr: ViewContainerRef, fb: FormBuilder) {

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

        this.toast.setRootViewContainerRef(vcr);
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
        });
    }

    onCancel() {
        this.resetView();
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
        this.professorService.deleteStudent(id)
            .subscribe(
                () => this.onSuccess('El alumno ha sido eliminado con exito', '¡Listo!'),
                () => this.onError());
    }

    onSave(id: number) {
        if (this.isEditing) {
            this.professorService
                .updateStudent(id, this.form.getRawValue())
                .subscribe(
                    () => {
                        this.onSuccess(
                            'Se ha actualizado al alumno '
                            + this.form.controls.name.value
                            + ' con exito', '¡Listo!');
                        this.resetView();
                    }, () => this.onError());
        } else if (this.isCreating) {
            this.professorService
                .createStudent(this.form.getRawValue())
                .subscribe(
                    () => {
                        this.onSuccess(
                            'Se ha dado de alta al alumno '
                            + this.form.controls.name.value
                            + ' con exito', '¡Listo!');
                        this.resetView();
                    }, () => this.onError());
        } else {
            this.onError();
        }
    }

    resetView() {
        this.isEditing = false;
        this.isCreating = false;
        this.studentToEdit = null;
        if (this.students) {
            this.studentSelected = 0;
        }
    }

    selectStudent(id: number) {
        this.studentSelected = id;
    }

    onSuccess(message: string, title?: string) {
        this.toast.success(message, title, {positionClass: 'toast-bottom-right', showCloseButton: true});
    }

    onError(message?: string, title?: string) {
        this.toast
            .error(
                message ? message : `Al parecer esto se salio de control,
                ¿Puedes intentarlo de nuevo? Si el problema persiste comunicate con el administrador`,
                title ? title : 'Oh!', {positionClass: 'toast-bottom-right', showCloseButton: true});
    }

    /*
    showSuccess() {
        this.toast.success('You are awesome!', 'Success!');
    }

    showError() {
        this.toast.error('This is not good!', 'Oops!');
    }

    showWarning() {
        this.toast.warning('You are being warned.', 'Alert!');
    }

    showInfo() {
        this.toast.info('Just some information for you.');
    }

    showCustom() {
        this.toast.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
    }*/
}
