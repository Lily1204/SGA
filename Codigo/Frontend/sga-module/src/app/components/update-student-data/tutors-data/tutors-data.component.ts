/**
 * Clase para el componente de Tutors Data
 **/

/**
 * Librerias por default de angular
 * */
import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

/**
 * Librerias de rxjs que añade soporte para programación funcional
 * */
import {Subscription} from 'rxjs/Subscription';
/**
 * Tipos de datos
 * */
import {KinshipEnum} from '../../../models/kinship.enum';
import {TutorData} from '../../../models/tutor-data.interface';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * providers = Indica los servicios que seran usados por el componente
 * */
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
/**
 * Clase TutorsDataComponent que implementa
 * la interfaz OnInit para escuchar el momento en
 * que se crea el componente, la interfaz OnDestroy
 * para escuchar el momento en que se destruye el componente
 * y la interfaz ControlValueAccessor la cual le permite al
 * componente actuar como un form control
 * */
export class TutorsDataComponent implements OnInit, OnDestroy, ControlValueAccessor {

  /**
   * Declaracion de un valor de entrada
   * del componente
   * */
  @Input() kinship: KinshipEnum;

  /**
   * Variable para almacenar una referencia
   * al formulario
   * */
  tutorForm: FormGroup;

  /**
   * Variable para almacenar todas las
   * subscripciones
   * */
  subscriptions: Subscription;

  /**
   * Variable para almacenar la funcion
   * callback onChange
   * */
  onChange: Function;

  /**
   * Variable para almacenar la funcion
   * callback onTouch
   * */
  onTouch: Function;

  /**
   * Constructor de la clase
   * */
  constructor(formBuilder: FormBuilder) {
    /**
     * Inicializacion del formulario
     * */
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

    /**
     * Inicializacion del objeto
     * */
    this.subscriptions = new Subscription();
  }

  /**
   * Funcion que retorna el tipo
   * de kinship a partir del
   * enum kinship
   * */
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

  /**
   * Metodo implementado por la interfaz OnInit
   * */
  ngOnInit(): void {
    this.tutorForm.controls.kinship.patchValue(this.kinshipToString);
  }

  /**
   * Metodo implementado por la interfaz OnDestroy
   * */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Metodo implementado por la interfaz ControlValueAccessor,
   * el formulario agrega una funcion callback para registrar
   * los cambios
   * */
  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.onChange(this.tutorForm.getRawValue());
  }

  /**
   * Metodo implementado por la interfaz ControlValueAccessor,
   * el formulario agrega una funcion callback para registrar
   * los cambios
   * */
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
    this.onTouch(this.tutorForm.getRawValue());
  }

  /**
   * Metodo implementado por la interfaz ControlValueAccessor,
   * el formulario registra por medio de esta funcion si el
   * componente esta desabilitado
   * */
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.tutorForm.disable() : this.tutorForm.enable();
  }

  /**
   * Metodo implementado por la interfaz ControlValueAccessor,
   * el formulario escribe datos en el componente por medio de
   * esta funcion
   * */
  writeValue(obj: TutorData): void {
    if (obj) {
      obj.kinship = this.kinshipToString;
      this.tutorForm.patchValue(obj);
    }
  }
}
