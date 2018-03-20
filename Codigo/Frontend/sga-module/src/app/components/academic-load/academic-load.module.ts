/**
 * Clase para el modulo de Academic Load
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
/**
 * Componente de Academic Load
 * */
import {AcademicLoadComponent} from './academic-load.component';
/**
 * Modulo de Academic Load Form
 * */
import {AcademicLoadFormModule} from './academic-load-form/academic-load-form.module';
/**
 * Modulo de notificaciones
 * */
import {ToastModule} from 'ng2-toastr';

/**
 * Declaracion de modulo tomando las anotaciones de angular
 * declarations = Declara los componentes del modulo
 * imports = Declara los mudulos importados
 * exports = Declara los componentes que se exportaran para
 * el uso en otros modulos
 * */
@NgModule({
  declarations: [
    AcademicLoadComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: AcademicLoadComponent}]),
    AcademicLoadFormModule,
    ToastModule.forRoot()
  ],
  exports: [
    AcademicLoadComponent
  ]
})
/**
 * Clase del modulo de Academic Load
 * */
export class AcademicLoadModule {
}
