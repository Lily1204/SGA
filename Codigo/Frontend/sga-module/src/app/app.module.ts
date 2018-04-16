import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
// Importacion de Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
// Herramientas a utilizar de Angular material
import {  MatTableModule  } from '@angular/material/table';
import {  MatButtonModule  } from '@angular/material/button';

import {AppComponent} from './app.component';
import {routes} from './app.routes';

import {AuthGuardService} from './services/auth-guard.service';
import {StudentService} from './services/student.service';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
