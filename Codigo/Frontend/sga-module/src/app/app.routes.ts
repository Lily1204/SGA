/**
 * Archivo de rutas internas
 **/

/**
 * Librerias por default de angular
 * */
import {Routes} from '@angular/router';
/**
 * Servicio de auth guard
 */
import {AuthGuardService} from './services/auth-guard.service';

/**
 * Exportacion de la constante "routes", el cual
 * es un arreglo de la clase "Routes"
 * */
export const routes: Routes = [
  /**
   * Rutas principales
   */
  {path: 'login', loadChildren: 'app/components/login/login.module#LoginModule'},
  {path: 'home', loadChildren: 'app/components/layout/layout.module#LayoutModule', canActivate: [AuthGuardService]},
  /**
   * Esta ruta indica que si se deja
   * como ruta vacia redirija a la ruta
   * "home"
   */
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];
