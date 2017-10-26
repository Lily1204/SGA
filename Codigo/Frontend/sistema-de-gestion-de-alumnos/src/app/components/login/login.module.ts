import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';

import {UserService} from '../../services/user.service';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [
        UserService
    ]
})
export class LoginModule {}
