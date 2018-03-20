/**
 * Clase para el modulo de Academic Load Item
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * Componente de Academic Load Item
 * */
import {AcademicLoadItemComponent} from './academic-load-item.component';

/**
 * Declaracion de modulo tomando las anotaciones de angular
 * declarations = Declara los componentes del modulo
 * imports = Declara los mudulos importados
 * exports = Declara los componentes que se exportaran para
 * el uso en otros modulos
 * */
@NgModule({
    declarations: [
        AcademicLoadItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AcademicLoadItemComponent
    ]
})
/**
 * Clase del modulo de Academic Load Form
 * */
export class AcademicLoadItemModule {
}
