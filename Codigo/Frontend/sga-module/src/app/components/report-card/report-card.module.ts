import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {  MatTableModule  } from '@angular/material/table';
import {  MatButtonModule  } from '@angular/material/button';

import {ReportCardComponent} from './report-card.component';

@NgModule({
  declarations: [
    ReportCardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild([{path: '', component: ReportCardComponent}])
  ],
  exports: [
    ReportCardComponent
  ]
})
export class ReportCardModule {
}
