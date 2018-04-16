/**
 * Clase para el modulo principal
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
/**
 * Componente de App
 * */
import {AppComponent} from './app.component';
/**
 * Archivo de rutas
 */
import {routes} from './app.routes';
/**
 * Servicios utilizados por la app
 */
import {AuthGuardService} from './services/auth-guard.service';
import {StudentService} from './services/student.service';

/**
 * Declaracion de modulo tomando las anotaciones de angular
 * declarations = Declara los componentes del modulo
 * imports = Declara los mudulos importados
 * providers = Declara los servicios usados
 * bootstrap = Declara el cargador de la app
 * */
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {useHash: true}),
        HttpClientModule
    ],
    providers: [
        AuthGuardService,
        StudentService
    ],
    bootstrap: [AppComponent]
})
/**
 * Clase del modulo de Login
 * */
export class AppModule {
}
