import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Subject} from '../../../../models/subject';

@Component({
    selector: 'app-academic-load-item',
    templateUrl: './academic-load-item.component.html'
})
export class AcademicLoadItemComponent implements OnInit {

    @Input() subject: Subject;

    _selectedItem: boolean;

    _disabled: boolean;

    @Output() selectedItem: EventEmitter<any>;

    constructor() {
        this.selectedItem = new EventEmitter<any>();
    }

    ngOnInit() {
        this._disabled = this.subject.qualification && this.subject.qualification >= 70;
    }

    onSelectedItem() {
        if (!this._disabled) {
            this._selectedItem = !this._selectedItem;
            this.selectedItem.emit({selected: this._selectedItem, subject: this.subject});
        }
    }
}
