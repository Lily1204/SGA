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
import {ReportCardComponent} from './report-card.component';

/**
 * Modulos de angular material
 * */
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

/**
 * Declaracion de modulo tomando las anotaciones de angular
 * declarations = Declara los componentes del modulo
 * imports = Declara los mudulos importados
 * exports = Declara los componentes que se exportaran para
 * el uso en otros modulos
 * */
@NgModule({
  declarations: [
    ReportCardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild([{path: '', component: ReportCardComponent}])
  ],
  exports: [
    ReportCardComponent
  ]
})
/**
 * Clase del modulo de Report Card
 * */
export class ReportCardModule {
}
