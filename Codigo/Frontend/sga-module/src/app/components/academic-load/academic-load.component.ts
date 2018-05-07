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
import {Subscription} from 'rxjs/Subscription';
import {ToastsManager} from 'ng2-toastr';

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
  subjectsInSemester: any;

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
  selectedSubjects: any[];

  /**
   * Variable para almacenar todas las subscripciones
   * */
  subscriptions: Subscription;

  isSendingAcademicLoad: boolean;

  /**
   * Constructor de la clase
   * */
  constructor(private studentService: UserService,
              private toastManager: ToastsManager, vcr: ViewContainerRef) {
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
       * Llamada al servicio "subjectsInSemester" el cual
       * pide el cardex del alumno
       * */
      this.studentService.subjectsInSemester().subscribe(subjects => {
        /**
         * Asignacion del arreglo de materias
         * por semestre
         * */
        this.subjectsInSemester = subjects;
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
    this.isSendingAcademicLoad = true;
    setTimeout(() => {
      this.toastManager.success('Carga Academica enviada con Exito');
      this.isSendingAcademicLoad = false;
    }, 1000);
  }

  /**
   * Metodo que escucha la
   * interaccion del usuario
   * con el boton de imprimir
   * carga academic
   * */
  onPrintAcademicLoad() {
    window.print();
  }
}
