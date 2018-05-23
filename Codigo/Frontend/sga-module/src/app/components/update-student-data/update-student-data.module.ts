/**
 * Clase para el modulo de Update Student Data
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
/**
 * Componente de Update Student Data
 * */
import {UpdateStudentDataComponent} from './update-student-data.component';
/**
 * Componente de Tutors Data
 * */
import {TutorsDataComponent} from './tutors-data/tutors-data.component';
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
    UpdateStudentDataComponent,
    TutorsDataComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: UpdateStudentDataComponent}]),
    ReactiveFormsModule,
    CommonModule,
    ToastModule.forRoot()
  ],
  exports: [
    UpdateStudentDataComponent
  ]
})
/**
 * Clase del modulo de Academic Load Form
 * */
export class UpdateStudentDataModule {
}
