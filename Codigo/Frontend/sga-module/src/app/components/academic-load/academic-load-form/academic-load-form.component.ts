import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-academic-load-form',
    templateUrl: './academic-load-form.component.html'
})
export class AcademicLoadFormComponent {

    @Input() subjectsInSemester: any;

    @Output() valueChanges: EventEmitter<any>;

    value: any[];

    constructor() {
        this.value = [];
        this.valueChanges = new EventEmitter<any>();
    }

    onSelectedItem(event: any) {
        if (event.selected) {
            this.value.push(event.subject);
        } else {
            this.value = this.value.filter((item) => item.code !== event.subject.code);
        }
        this.onValueChanges();
    }

    onValueChanges() {
        this.valueChanges.emit(this.value);
    }
}
