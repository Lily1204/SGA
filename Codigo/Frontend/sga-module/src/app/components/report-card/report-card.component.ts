/**
 * Clase para el componente de Report Card
 **/

/**
 * Librerias por default de angular
 * */
import {Component, OnDestroy, OnInit} from '@angular/core';

/**
 * Servicio que obtiene informacion del estudiante
 * */
import {UserService} from '../../services/user.service';

/**
 * Librerias de rxjs que añade soporte para programación funcional
 * */
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

/**
 * Librerias de Ng R X Store
 * */
import {Store} from '@ngrx/store';

/**
 * Tipos de datos
 * */
import {AppState} from '../../models/app.state';
import {UserData} from '../../models/user-data.interface';
import {ReportCardData} from '../../models/report-card-data.interface';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * */
@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html'
})
/**
 * Clase ReportCardComponent que implementa
 * la interfaz OnInit para escuchar el momento en
 * que se crea el componente y la interfaz OnDestroy
 * para escuchar el momento en que se destruye el componente
 * */
export class ReportCardComponent implements OnInit, OnDestroy {

  /** Datos que iran dentro del DataTable (nombres de la columnas)*/
  displayedColumns: any = ['id', 'subject', 'score', 'credits'];

  /**
   * Variable para almacenar todas las
   * subscripciones
   * */
  subscriptions: Subscription;

  /**
   * Observable del objeto usuario
   * */
  user$: Observable<UserData>;

  /**
   * Variable que almacena la informacion del usuario
   * */
  user: UserData;

  reportCardData: ReportCardData;

  /**
   * Constructor de la clase
   * */
  constructor(private studentService: UserService,
              private store: Store<AppState>) {

    /**
     * Inicializacion del objeto
     * */
    this.subscriptions = new Subscription();
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
          this.studentService.reportCard(user.id).subscribe(reportCard =>
            /**
             * Asignacion del arreglo de materias
             * por semestre
             * */
            this.reportCardData = reportCard));
      }));
  }

  /**
   * Metodo implementado por la interfaz OnDestroy
   * */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Metodo que escucha la
   * interaccion del usuario
   * con el boton de imprimir
   * */
  onPrintReportCard() {
    window.print();
  }
}
