import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ReportCardComponent} from './report-card.component';

@NgModule({
  declarations: [
    ReportCardComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: ReportCardComponent}])
  ],
  exports: [
    ReportCardComponent
  ]
})
export class ReportCardModule {
}
