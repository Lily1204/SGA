import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {UpdateStudentDataComponent} from './update-student-data.component';

@NgModule({
  declarations: [
    UpdateStudentDataComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: UpdateStudentDataComponent}])
  ],
  exports: [
    UpdateStudentDataComponent
  ]
})
export class UpdateStudentDataModule {
}
