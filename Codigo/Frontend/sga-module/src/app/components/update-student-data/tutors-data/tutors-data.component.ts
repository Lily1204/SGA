import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

import {Subscription} from 'rxjs/Subscription';

import {KinshipEnum} from '../../../models/kinship.enum';

@Component({
  selector: 'app-tutors-data',
  templateUrl: 'tutors-data.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TutorsDataComponent),
      multi: true
    }
  ]
})
export class TutorsDataComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() kinship: KinshipEnum;

  tutorForm: FormGroup;

  subscriptions: Subscription;

  onChange: Function;

  onTouch: Function;

  constructor(formBuilder: FormBuilder) {
    this.subscriptions = new Subscription();

    this.tutorForm = formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      mothersLastName: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      colony: ['', Validators.required],
      township: ['', Validators.required],
      postalCode: ['', Validators.required],
      workCenter: ['', Validators.required],
      kinship: [{value: '', disabled: true}]
    });
  }

  ngOnInit(): void {
    this.tutorForm.controls.kinship.patchValue(this.kinshipToString);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.onChange(this.tutorForm.getRawValue());
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
    this.onTouch(this.tutorForm.getRawValue());
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.tutorForm.disable() : this.tutorForm.enable();
  }

  writeValue(obj: any): void {
    this.tutorForm.patchValue(obj);
  }

  get kinshipToString(): string {
    switch (this.kinship) {
      case KinshipEnum.FATHER:
        return 'Padre';
      case KinshipEnum.MOTHER:
        return 'Madre';
      case KinshipEnum.TUTOR:
        return 'Tutor';
      default:
        return this.kinship;
    }
  }
}
