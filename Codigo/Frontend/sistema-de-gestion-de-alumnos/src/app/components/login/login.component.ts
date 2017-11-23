import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-logging',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    form: FormGroup;

    onError: boolean;

    constructor(fb: FormBuilder,
                private userService: UserService,
                private router: Router) {
        if (this.userService.isAuthenticate()) {
            this.router.navigate(['/professor']);
        }
        this.form = fb.group({
            'user': ['', Validators.required],
            'password': ['', [
                Validators.required,
                Validators.minLength(8)]]
        });
    }

    login(rol: string): void {
        const request = this.form.value;
        request.rol = rol;
        this.userService.logging(request).subscribe(next => this.router.navigate([rol]));
    }
}
