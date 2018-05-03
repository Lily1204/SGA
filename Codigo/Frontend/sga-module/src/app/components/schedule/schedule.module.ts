import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

/*Importacion de modulo a utilizar para el diseño de la vista 
  en este caso el de tabla*/
//import {  MatTableModule  } from '@angular/material/table';

import {ScheduleComponent} from './schedule.component';

@NgModule({
  declarations: [
    ScheduleComponent//Declarando nuestro componente
  ],
  imports: [
  	CommonModule,//Importacion de CommonModule
  	//MatTableModule,//Importacion de MatTableModule
    RouterModule.forChild([{path: '', component: ScheduleComponent}])//Enrutando la vista
  ],
  exports: [
    ScheduleComponent
  ]
})
export class ScheduleModule {
}
