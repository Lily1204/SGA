import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {MatTableModule} from '@angular/material/table';

import {ScheduleComponent} from './schedule.component';

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([{path: '', component: ScheduleComponent}])
  ],
  exports: [
    ScheduleComponent
  ]
})
export class ScheduleModule {
}
