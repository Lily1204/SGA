import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {  MatTableModule  } from '@angular/material/table';

import {ScheduleComponent} from './schedule.component';

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
  	MatTableModule,
    RouterModule.forChild([{path: '', component: ScheduleComponent}])
  ],
  exports: [
    ScheduleComponent
  ]
})
export class ScheduleModule {
}
