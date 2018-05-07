import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {KinshipEnum} from '../../models/kinship.enum';
import {Subscription} from 'rxjs/Subscription';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-update-student-data',
  templateUrl: './update-student-data.component.html'
})
export class UpdateStudentDataComponent implements OnInit, OnDestroy {

  KinshipEnum = KinshipEnum;

  generalDataForm: FormGroup;

  privateAddressForm: FormGroup;

  enableTutorsForm: FormGroup;

  subscriptions: Subscription;

  isUpdatingStudentData: boolean;

  constructor(formBuilder: FormBuilder,
              private toastManager: ToastsManager, vcr: ViewContainerRef) {
    this.generalDataForm = formBuilder.group({
      name: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      mothersLastName: ['', Validators.required],
      career: ['', Validators.required],
      semester: ['', Validators.required],
      birthday: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      stateOfBirth: ['', Validators.required],
      bloodType: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      father: [{value: '', disabled: true}],
      mother: [{value: '', disabled: true}],
      tutor: [{value: '', disabled: true}]
    });

    this.privateAddressForm = formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      colony: ['', Validators.required],
      township: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    });

    this.enableTutorsForm = formBuilder.group({
      father: '',
      mother: '',
      tutor: ''
    });

    this.subscriptions = new Subscription();

    this.toastManager.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.enableTutorsForm.controls.father.valueChanges
        .subscribe(value => this.generalDataForm.controls.father[value ? 'enable' : 'disable']()));
    this.subscriptions.add(
      this.enableTutorsForm.controls.mother.valueChanges
        .subscribe(value => this.generalDataForm.controls.mother[value ? 'enable' : 'disable']()));
    this.subscriptions.add(
      this.enableTutorsForm.controls.tutor.valueChanges
        .subscribe(value => this.generalDataForm.controls.tutor[value ? 'enable' : 'disable']()));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onUpdateStudentData(): void {
    this.isUpdatingStudentData = true;
    setTimeout(() => {
      this.toastManager.success('Datos de alumnos actualizados con exito');
      this.isUpdatingStudentData = false;
    }, 1000);
  }

  onPrintStudentData() {
    window.print();
  }
}
