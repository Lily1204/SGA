/**
 * Clase para el modulo de Layout
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
/**
 * Componente de Layout
 * */
import {LayoutComponent} from './layout.component';
/**
 * Rutas de la aplicacion
 * */
import {routes} from './layout.routes';
/**
 * Modulo de font awesome
 * */
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

/**
 * Declaracion de modulo tomando las anotaciones de angular
 * declarations = Declara los componentes del modulo
 * imports = Declara los mudulos importados
 * exports = Declara los componentes que se exportaran para
 * el uso en otros modulos
 * */
@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
/**
 * Clase del modulo de Layout
 * */
export class LayoutModule {
}
