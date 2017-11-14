import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ROUTES} from './layout.routes';

import {LayoutComponent} from './layout.component';

import {HomeModule} from '../home/home.module';
import {ProfessorService} from '../../services/professor.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    providers: [
        ProfessorService
    ],
    imports: [
        HttpClientModule,
        HttpModule,
        RouterModule.forChild(ROUTES),
        CommonModule,
        HomeModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {}
