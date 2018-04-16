import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ReportCardComponent} from './report-card.component';

@NgModule({
  declarations: [
    ReportCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ReportCardComponent}])
  ],
  exports: [
    ReportCardComponent
  ]
})
export class ReportCardModule {
}
