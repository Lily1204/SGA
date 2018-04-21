import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ReportCardComponent} from './report-card.component';

import {MatButtonModule, MatTableModule} from '@angular/material';

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
