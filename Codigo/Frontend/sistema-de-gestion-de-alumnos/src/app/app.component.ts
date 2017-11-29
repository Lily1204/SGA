import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    isExpanded: boolean;

    constructor(public userService: UserService,
                private router: Router) {
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/logging']);
    }
}
