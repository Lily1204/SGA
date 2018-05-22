/**
 * Clase para el modulo de Academic Load
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';

/**
 * Componente de Academic Load Dialog
 * */
import {AcademicLoadDialogComponent} from './academic-load-dialog.component';

/**
 * Modulos de angular material
 * */
import {MatDialogModule} from '@angular/material/dialog';
/**
 * Modulo de Font Awesome
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
    AcademicLoadDialogComponent
  ],
  imports: [
    MatDialogModule,
    FontAwesomeModule
  ],
  exports: [
    AcademicLoadDialogComponent
  ],
  entryComponents: [
    AcademicLoadDialogComponent
  ]
})
/**
 * Clase del modulo de Academic Load Dialog
 * */
export class AcademicLoadDialogModule {
}
