/**
 * Clase para el componente de Update Student Data
 **/

/**
 * Librerias por default de angular
 * */
import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * Servicio que obtiene informacion del estudiante
 * */
import {UserService} from '../../services/user.service';

/**
 * Librerias de rxjs que añade soporte para programación funcional
 * */
import {Subscription} from 'rxjs/internal/Subscription';
import {Observable} from 'rxjs/internal/Observable';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';
/**
 * Manager de Toast para las notificaciones
 * */
import {ToastsManager} from 'ng2-toastr';
/**
 * Librerias de Ng R X Store
 * */
import {Store} from '@ngrx/store';
/**
 * Tipos de datos
 * */
import {AppState} from '../../models/app.state';
import {KinshipEnum} from '../../models/kinship.enum';
import {UserData} from '../../models/user-data.interface';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * */
@Component({
  selector: 'app-update-student-data',
  templateUrl: './update-student-data.component.html'
})
/**
 * Clase UpdateStudentDataComponent que implementa
 * la interfaz OnInit para escuchar el momento en
 * que se crea el componente y la interfaz OnDestroy
 * para escuchar el momento en que se destruye el componente
 * */
export class UpdateStudentDataComponent implements OnInit, OnDestroy {

  /**
   * Variable que hace referencia
   * al enum de kinships para su
   * uso en el componente
   * */
  KinshipEnum = KinshipEnum;
  /**
   * Variable para almacenar una referencia
   * al formulario de datos generales
   * */
  generalDataForm: FormGroup;

  /**
   * Variable para almacenar una referencia
   * al formulario de direccion
   * */
  addressForm: FormGroup;
  /**
   * Variable para almacenar una referencia
   * al formulario de tutores
   * */
  enableTutorsForm: FormGroup;

  /**
   * Variable para almacenar todas las
   * subscripciones
   * */
  subscriptions: Subscription;

  /**
   * Variable que indica si los datos
   * del usuario esta enviandose
   * */
  isUpdatingStudentData: boolean;

  /**
   * Observable del objeto usuario
   * */
  user$: Observable<UserData>;

  /**
   * Variable que almacena la informacion del usuario
   * */
  user: UserData;

  /**
   * Constructor de la clase
   * */
  constructor(private studentService: UserService,
              private store: Store<AppState>,
              private toastManager: ToastsManager,
              formBuilder: FormBuilder,
              vcr: ViewContainerRef) {
    /**
     * Inicializacion del formulario de
     * informacion general
     * */
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

    /**
     * Inicializacion del formulario de
     * direccion
     * */
    this.addressForm = formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      colony: ['', Validators.required],
      township: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    });

    /**
     * Inicializacion del formulario
     * de tutores
     * */
    this.enableTutorsForm = formBuilder.group({
      father: '',
      mother: '',
      tutor: ''
    });

    /**
     * Inicializacion del objeto
     * */
    this.subscriptions = new Subscription();

    /**
     * Configuracion del toast manager
     * */
    this.toastManager.setRootViewContainerRef(vcr);
  }

  /**
   * Metodo implementado por la interfaz OnInit
   * */
  ngOnInit(): void {
    /**
     * Se añade una subscripcion
     * */
    this.subscriptions.add(
      /**
       * Se añade una subscripcion a la propiedad 'father',
       * cuando se produzca un cambio de estado se activara
       * o desactivara el formulario correspondiente y se
       * ocultara
       * */
      this.enableTutorsForm.controls.father.valueChanges
        .subscribe(value => this.generalDataForm.controls.father[value ? 'enable' : 'disable']()));
    /**
     * Se añade una subscripcion
     * */
    this.subscriptions.add(
      /**
       * Se añade una subscripcion a la propiedad 'mother',
       * cuando se produzca un cambio de estado se activara
       * o desactivara el formulario correspondiente y se
       * ocultara
       * */
      this.enableTutorsForm.controls.mother.valueChanges
        .subscribe(value => this.generalDataForm.controls.mother[value ? 'enable' : 'disable']()));
    /**
     * Se añade una subscripcion
     * */
    this.subscriptions.add(
      /**
       * Se añade una subscripcion a la propiedad 'tutor',
       * cuando se produzca un cambio de estado se activara
       * o desactivara el formulario correspondiente y se
       * ocultara
       * */
      this.enableTutorsForm.controls.tutor.valueChanges
        .subscribe(value => this.generalDataForm.controls.tutor[value ? 'enable' : 'disable']()));
    /**
     * Se pide al storage el estado actual de la aplicacion
     * y se le asigna el observable del dato a la variable
     * "user$"
     * */
    this.user$ = this.store.select((state: AppState) => state.user);

    /**
     * Se añade una subscripcion
     * */
    this.subscriptions.add(
      /**
       * Escucha los cambios en el store
       * para los datos del usuario
       * */
      this.user$.subscribe(user => {
        /**
         * Asigna la informacion del usuario almacenada
         * en el storage para que sea posible acceder
         * rapidamente a la informacion en la clase
         * */
        this.user = user;
        /**
         * Se añade una subscripcion
         * */
        this.subscriptions.add(
          /**
           * Llamada al servicio "subjectsInSemester" el cual
           * pide el cardex del alumno
           * */
          this.studentService.studentData(user.id).subscribe(studentData => {
            this.enableTutorsForm.controls.father.patchValue(!!studentData.father);
            this.enableTutorsForm.controls.mother.patchValue(!!studentData.mother);
            this.enableTutorsForm.controls.tutor.patchValue(!!studentData.tutor);
            /**
             * Se llena el formulario con los datos existente
             * en el servidor
             * */
            this.generalDataForm.patchValue(studentData);
          }));
        /**
         * Se añade una subscripcion
         * */
        this.subscriptions.add(
          /**
           * Llamada al servicio "subjectsInSemester" el cual
           * pide el cardex del alumno
           * */
          this.studentService.addressData(user.id).subscribe(addressData => {
            /**
             * Se llena el formulario con los datos existente
             * en el servidor
             * */
            this.addressForm.patchValue(addressData);
          }));
      }));
  }

  /**
   * Metodo implementado por la interfaz OnDestroy
   * */
  ngOnDestroy(): void {
    /**
     * Llamada al metodo unsubscribe que desuscribe
     * todas las subscripciones añadidas
     */
    this.subscriptions.unsubscribe();
  }

  /**
   * Metodo que escucha la
   * interaccion del usuario
   * con el boton de actualizar
   * datos
   * */
  onUpdateStudentData(): void {
    /**
     * Cambia el valor de la variable
     * para indicar que la carga academica
     * se esta enviando
     * */
    this.isUpdatingStudentData = true;
    /**
     * Se añade una subscripcion
     * */
    this.subscriptions.add(
      /**
       * Metodo 'forkJoin' de la libreria de
       * rxjs, permite unir varios observables
       * en uno solo, este no continuara hasta
       * que todos lo hagan
       * */
      forkJoin(
        /**
         * Llamada al servicio "updateStudentData" el cual
         * envia las materias seleccionadas por el alumno
         * */
        this.studentService.updateStudentData(this.user.id, this.generalDataForm.getRawValue()),
        /**
         * Llamada al servicio "updateAddressData" el cual
         * envia las materias seleccionadas por el alumno
         * */
        this.studentService.updateAddressData(this.user.id, this.addressForm.getRawValue()))
      /**
       * Cuando el servicio recibe la respuesta del
       * servidor cambia el valor de la variable para
       * indicar al usuario que termino de cargar
       * */
        .finally(() => this.isUpdatingStudentData = false)
        .subscribe(() =>
            /**
             * Si el servicio completa la
             * operacion con exito se ejecutara
             * el codigo en este bloque
             * */
            this.toastManager.success('Datos de Alumno enviados con Exito'),
          () =>
            /**
             * De lo contrario, se ejecuta
             * este bloque de codigo
             * */
            this.toastManager.error('Sucedio algun error al enviar los datos')));
  }

  /**
   * Metodo que escucha la
   * interaccion del usuario
   * con el boton de imprimir
   * */
  onPrintStudentData() {
    window.print();
  }
}
