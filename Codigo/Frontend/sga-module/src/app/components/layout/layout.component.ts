/**
 * Clase para el componente de layout
 **/

/**
 * Librerias por default de angular
 * */
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';
/**
 * Iconos e interfaz de font awesome
 * */
import {faGraduationCap, faPrint, faSignOutAlt} from '@fortawesome/fontawesome-free-solid';
import {IconDefinition} from '@fortawesome/fontawesome';
import {faEdit} from '@fortawesome/fontawesome-free-regular';
/**
 * Libreria de rxjs que añade soporte para programación funcional
 * */
import {filter} from 'rxjs/operator/filter';
import {Subscription} from 'rxjs/Subscription';
/**
 * Librerias de Ng R X Store
 * */
import {Store} from '@ngrx/store';
/**
 * Acciones para la store
 * */
import * as AuthenticationActions from '../../actions/authentication.actions';
/**
 * Tipos de datos
 * */
import {AppState} from '../../models/app.state';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
/**
 * Clase LayoutComponent que implementa las interfaces OnInit y
 * OnDestroy para escuchar el momento en que se crea y en el
 * que se destruye el componente
 * */
export class LayoutComponent implements OnInit, OnDestroy {

  /**
   * Referencia a los iconos de font awesome
   * */
  signOutAlt: IconDefinition = faSignOutAlt;
  print: IconDefinition = faPrint;
  edit: IconDefinition = faEdit;
  graduationCap: IconDefinition = faGraduationCap;

  /**
   * Variable que indicara cuando se este cargando los datos del servidor tras la petición del usuario
   * */
  pageIsLoading: boolean;

  /**
   * Variable para almacenar todas las subscripciones
   * */
  subscriptions: Subscription;

  /**
   * Constructor de la clase
   * */
  constructor(private router: Router, private store: Store<AppState>) {
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
     * Se añade una subscripcion
     * */
    this.subscriptions.add(
      /**
       * Metodo de la libreria de rxjs que permite
       * filtrar Observables
       * */
      filter.call(
        /**
         * Observable de los eventos del router
         * */
        this.router.events,
        /**
         * Logica del filtro de eventos del router,
         * el cual solo dejara pasar las instancias
         * de RouterEvent
         * */
        event => event instanceof RouterEvent)
      /**
       * Subscripcion al los eventos
       * */
        .subscribe(data => {
          if (data instanceof NavigationStart) {
            /**
             * Si el argumento "data" es una instancia de
             * NavigationStart cambia el valor a "true"
             * */
            this.pageIsLoading = true;
          } else if (data instanceof NavigationEnd) {
            /**
             * Si el argumento "data" es una instancia de
             * NavigationEnd cambia el valor a "false"
             * */
            this.pageIsLoading = false;
          }
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

  onLogout() {
    this.router.navigate(['..', 'login']).then(() => {
      this.store.dispatch(new AuthenticationActions.Logout());
    });
  }
}
