import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {ROUTES} from './layout.routes';

import {LayoutComponent} from './layout.component';

import {ProfessorModule} from '../professor/professor.module';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        HttpClientModule,
        HttpModule,
        RouterModule.forChild(ROUTES),
        CommonModule,
        ProfessorModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {}
