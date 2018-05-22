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
import {AuthGuard} from './guards/auth.guard';
import {UserService} from './services/user.service';
/**
 * importacion de Ng R X Store
 * */
import {StoreModule} from '@ngrx/store';
/**
 * importacion de las herramientas de desarrollo de Ng R X Store
 * */
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
/**
 * Reducers de la aplicacion
 * */
import {authenticationReducer} from './reducers/authentication.reducer';

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
    StoreModule.forRoot({
      user: authenticationReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
/**
 * Clase del modulo de la aplicacion
 * */
export class AppModule {
}
