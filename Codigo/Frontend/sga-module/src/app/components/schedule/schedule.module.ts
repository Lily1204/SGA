/**
 * Clase para el modulo de Report Card
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

/**
 * Componente de Report Card
 * */
import {ScheduleComponent} from './schedule.component';

/**
 * Declaracion de modulo tomando las anotaciones de angular
 * declarations = Declara los componentes del modulo
 * imports = Declara los mudulos importados
 * exports = Declara los componentes que se exportaran para
 * el uso en otros modulos
 * */
@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ScheduleComponent}])
  ],
  exports: [
    ScheduleComponent
  ]
})
/**
 * Clase del modulo de Schedule
 * */
export class ScheduleModule {
}
