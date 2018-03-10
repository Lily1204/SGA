import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';

import {TrackingImageHoverModule} from '../../directives/jquery/tracking-image-hover/tracking-image-hover.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '', component: LoginComponent
        }]),
        TrackingImageHoverModule,
        ReactiveFormsModule,
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {}
