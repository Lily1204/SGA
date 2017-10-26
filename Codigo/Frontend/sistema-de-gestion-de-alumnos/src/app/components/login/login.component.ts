import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-logging',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    form: FormGroup;

    constructor(fb: FormBuilder
                , private userService: UserService) {
        this.form = fb.group({
            'control_number': ['', Validators.required],
            'password': ['', [
                Validators.required,
                Validators.minLength(8)]]
        });
    }

    login() {
        this.userService.logging(this.form.controls.control_number.value, this.form.controls.password.value);
    }
}
