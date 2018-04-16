import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ScheduleComponent} from './schedule.component';

@NgModule({
    declarations: [
        ScheduleComponent
    ],
    imports: [
        RouterModule.forChild([{path: '', component: ScheduleComponent}])
    ],
    exports: [
        ScheduleComponent
    ]
})
export class ScheduleModule {
}
