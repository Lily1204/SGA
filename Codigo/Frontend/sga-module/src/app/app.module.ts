/**
 * Clase para el modulo principal
 **/

/**
 * Librerias por default de angular
 * */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
/**
 * Importacion de Angular Material
 * */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
/**
 * Herramientas a utilizar de Angular material
 * */
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
import {StoreModule} from '@ngrx/store';

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
        HttpClientModule,
        RouterModule.forRoot(routes, {useHash: true}),
        StoreModule.forRoot({})
    ],
    providers: [
        AuthGuardService,
        StudentService
    ],
    bootstrap: [AppComponent]
})
/**
 * Clase del modulo de la aplicacion
 * */
export class AppModule {
}
