import {Component, Input} from '@angular/core';
import {StudentInterface} from '../../../shared/student.interface';

@Component({
    selector: 'app-student-view',
    templateUrl: './student-view.component.html'
})
export class StudentViewComponent {

    @Input() student: StudentInterface;

    @Input() selected: boolean;
}
