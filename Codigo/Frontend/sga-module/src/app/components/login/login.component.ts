import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {StudentService} from '../../services/student.service';

import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/finally';

import {faSpinner} from '@fortawesome/fontawesome-free-solid';
import {IconDefinition} from '@fortawesome/fontawesome';

@Component({
    selector: 'app-logging',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

    loading: boolean;

    form: FormGroup;

    subscription: Subscription;

    loadIcon: IconDefinition = faSpinner;

    constructor(formBuilder: FormBuilder, private studentService: StudentService, private router: Router) {
        this.form = formBuilder.group({
            controlNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
            password: ['', Validators.required]
        });

        this.subscription = new Subscription();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onClickLoggingButton() {
        this.loading = true;
        this.subscription.add(
            this.studentService.userLogin(this.form.value)
                .finally(() => this.loading = false)
                /**
                 * This finally method may be deleted when the user login service be finished
                 * */
                .finally(() => this.router.navigate(['home'])).subscribe(() => {
            }, () => {
            }, () => {
            }));
    }
}
