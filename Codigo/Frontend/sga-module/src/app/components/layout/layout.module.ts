import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {LayoutComponent} from './layout.component';

import {routes} from './layout.routes';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FontAwesomeModule,
        CommonModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {}
