/**
 * Guard para la autorizacion de acceso al usuario
 * al sistema, si el usuario no se encuentra logueado
 * no lo deja acceder
 * */

/**
 * Librerias de angular
 * */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

/**
 * Librerias de rxjs que añade soporte para programación funcional
 * */
import {Observable} from 'rxjs/Observable';

/**
 * Librerias de Ng R X Store
 * */
import {Store} from '@ngrx/store';
/**
 * Tipos de datos
 * */
import {UserData} from '../models/user-data.interface';
import {AppState} from '../models/app.state';

/**
 * Declaracion de un servicio con la etiqueta
 * Injectable
 * */
@Injectable()
/**
 * Clase AuthGuard que implementa la interfaz "CanActivate",
 * la cual es necesaria para indicarle al router del
 * framework si el usuario que esta intentando acceder
 * tiene permisos o autorizacion para ver la ruta indicada
 * */
export class AuthGuard implements CanActivate {

  /**
   * Variable que almacena una referencia a un Observable
   * de tipo UserData
   * */
  user$: Observable<UserData>;
  /**
   * Variable de tipo UserData
   * */
  user: UserData;

  /**
   * Constructor del servicio
   * */
  constructor(private router: Router, private store: Store<AppState>) {
    /**
     * Inicializacion del Observable tomando los datos del store de la app
     * */
    this.user$ = store.select(state => state.user);
    /**
     * Subscripcion a los cambios en la store para actualizar la variable
     * user
     * */
    this.user$.subscribe(user => this.user = user);
  }

  /**
   * Metodo "canActivate" implementado por la interfaz "CanActivate", este debe
   * devolver si el usuario tiene autorizacion de acceder a la ruta indicada o no
   * */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /**
     * Si la variable usuario esta inicializada le permite
     * continuar al usuario a la vista "home", de lo contrario
     * lo redirige al login
     * */
    if (this.user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
