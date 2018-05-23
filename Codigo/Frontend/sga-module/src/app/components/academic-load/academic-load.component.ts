/**
 * Clase para el componente de Academic Load
 **/

/**
 * Librerias por default de angular
 * */
import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
/**
 * Servicio que obtiene informacion del estudiante
 * */
import {UserService} from '../../services/user.service';
/**
 * Librerias de rxjs que añade soporte para programación funcional
 * */
import {Subscription} from 'rxjs/internal/Subscription';
import {Observable} from 'rxjs/internal/Observable';
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
import {Subject} from '../../models/subject.interface';
import {SubjectsInSemester} from '../../models/subjects-in-semester.interface';
import {UserData} from '../../models/user-data.interface';
/**
 * Librerias de angular material
 * */
import {MatDialog} from '@angular/material';
/**
 * Componente de Academic Load Dialog
 * */
import {AcademicLoadDialogComponent} from './academic-load-dialog/academic-load-dialog.component';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * */
@Component({
  selector: 'app-academic-load',
  templateUrl: './academic-load.component.html'
})
/**
 * Clase AcademicLoadComponent que implementa las interfaces OnInit y
 * OnDestroy para escuchar el momento en que se crea y en el
 * que se destruye el componente
 * */
export class AcademicLoadComponent implements OnInit, OnDestroy {

  /**
   * Variable para almacenar en memoria
   * el cardex del alumno
   * */
  subjectsInSemester: SubjectsInSemester[];

  /**
   * Variable para almacenar los
   * creditos disponibles para el alumno
   * */
  availableCredits: number;

  /**
   * Variable para almacenar la cantidad
   * minima de creditos a seleccionar
   * para que el sistema permita terminar
   * la carga
   * */
  minorCredits: number;

  /**
   * Variable para almacenar los creditos
   * seleccionados
   * */
  selectedCredits: number;

  /**
   * Variable para almacenar las materias
   * seleccionadas
   * */
  selectedSubjects: Subject[];

  /**
   * Variable para almacenar todas las subscripciones
   * */
  subscriptions: Subscription;

  /**
   * Variable que indica si la carga academica esta enviandose
   * */
  isSendingAcademicLoad: boolean;

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
              private toastManager: ToastsManager,
              private store: Store<AppState>,
              public dialog: MatDialog,
              vcr: ViewContainerRef) {
    /**
     * Inicializacion del objeto
     * */
    this.subscriptions = new Subscription();
    /**
     * Inicializacion de las variables
     * en 0 para que no provoquen errores por undefined
     * */
    this.availableCredits = 35;

    this.minorCredits = 22;

    this.selectedCredits = 0;

    this.selectedSubjects = [];

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
          this.studentService.subjectsInSemester(user.id).subscribe(subjects =>
            /**
             * Asignacion del arreglo de materias
             * por semestre
             * */
            this.subjectsInSemester = subjects));
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
   * Metodo que escucha el estado del formulario
   * de materias
   * */
  onValueChanges(value) {
    /**
     * Asigna el estado del formulario a la
     * variable local
     * */
    this.selectedSubjects = value;
    /**
     * Pone en "0" el contador
     * de creditos seleccionados
     * */
    this.selectedCredits = 0;
    /**
     * A traves de una funcion forEach
     * se iteran todos los elementos
     * para sumar el valor de cada elemento
     * */
    this.selectedSubjects.forEach((item) => this.selectedCredits += item.credits);
  }

  /**
   * Metodo que escucha la
   * interaccion del usuario
   * con el boton de enviar
   * carga academica
   * */
  onSendAcademicLoad() {
    if (this.selectedCredits > this.availableCredits) {
      this.openDialog();
    } else {
      /**
       * Cambia el valor de la variable
       * para indicar que la carga academica
       * se esta enviando
       * */
      this.isSendingAcademicLoad = true;
      /**
       * Se añade una subscripcion
       * */
      this.subscriptions.add(
        /**
         * Llamada al servicio "academicLoad" el cual
         * envia las materias seleccionadas por el alumno
         * */
        this.studentService.academicLoad(this.user.id, this.selectedSubjects)
        /**
         * Cuando el servicio recibe la respuesta del
         * servidor cambia el valor de la variable para
         * indicar al usuario que termino de cargar
         * */
          .finally(() => this.isSendingAcademicLoad = false)
          .subscribe(() =>
              /**
               * Si el servicio completa la
               * operacion con exito se ejecutara
               * el codigo en este bloque
               * */
              this.toastManager.success('Carga Academica enviada con Exito'),
            () =>
              /**
               * De lo contrario, se ejecuta
               * este bloque de codigo
               * */
              this.toastManager.error('Sucedio algun error al enviar la carga academica'))
      );
    }
  }

  /**
   * Metodo que abre el dialogo
   * */
  openDialog(): void {
    this.dialog.open(AcademicLoadDialogComponent, {
      data: {
        availableCredits: this.availableCredits
      }
    });
  }

  /**
   * Metodo que escucha la
   * interaccion del usuario
   * con el boton de imprimir
   * */
  onPrintAcademicLoad() {
    window.print();
  }
}
