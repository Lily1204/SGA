/**
 * Clase para el modulo de Academic Load Form
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
/**
 * Componente de Academic Load Form
 * */
import {AcademicLoadFormComponent} from './academic-load-form.component';
/**
 * Modulo de Academic Load Item
 * */
import {AcademicLoadItemModule} from './academic-load-item/academic-load-item.module';

/**
 * Declaracion de modulo tomando las anotaciones de angular
 * declarations = Declara los componentes del modulo
 * imports = Declara los mudulos importados
 * exports = Declara los componentes que se exportaran para
 * el uso en otros modulos
 * */
@NgModule({
    declarations: [
        AcademicLoadFormComponent
    ],
    imports: [
        AcademicLoadItemModule,
        CommonModule
    ],
    exports: [
        AcademicLoadFormComponent
    ]
})
/**
 * Clase del modulo de Academic Load Form
 * */
export class AcademicLoadFormModule {
}
