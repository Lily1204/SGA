import {Component, EventEmitter, Input, Output} from '@angular/core';

import {StudentInterface} from '../../../shared/student.interface';

@Component({
    selector: 'app-student-view',
    templateUrl: './student-view.component.html'
})
export class StudentViewComponent {

    @Input() student: StudentInterface;

    @Input() selected: boolean;

    @Output() edit: EventEmitter<StudentInterface>;

    @Output() delete: EventEmitter<number>;

    constructor() {
        this.edit = new EventEmitter<StudentInterface>();
        this.delete = new EventEmitter<number>();
    }

    onDelete() {
        this.delete.emit(this.student.id);
    }

    onEdit() {
        this.edit.emit(this.student);
    }
}
