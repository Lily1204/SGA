/**
 * Clase para el modulo de Login
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
/**
 * Componente de Login
 * */
import {LoginComponent} from './login.component';
/**
 * Modulo de la directiva Tracking Image Hover
 * */
import {TrackingImageHoverModule} from '../../directives/jquery/tracking-image-hover/tracking-image-hover.module';
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
        LoginComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '', component: LoginComponent
        }]),
        TrackingImageHoverModule,
        ReactiveFormsModule,
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        LoginComponent
    ]
})
/**
 * Clase del modulo de Login
 * */
export class LoginModule {
}
