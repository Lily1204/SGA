import {Component, OnDestroy, OnInit} from '@angular/core';

import {faGraduationCap, faPrint, faSignOutAlt} from '@fortawesome/fontawesome-free-solid';
import {IconDefinition} from '@fortawesome/fontawesome';
import {faEdit} from '@fortawesome/fontawesome-free-regular';
import {NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operator/filter';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit, OnDestroy {

    signOutAlt: IconDefinition = faSignOutAlt;
    print: IconDefinition = faPrint;
    edit: IconDefinition = faEdit;
    graduationCap: IconDefinition = faGraduationCap;

    pageIsLoading: boolean;

    subscriptions: Subscription;

    constructor(private router: Router) {
        this.subscriptions = new Subscription();
    }

    ngOnInit(): void {
        this.subscriptions.add(
            filter.call(this.router.events, event => event instanceof RouterEvent)
                .subscribe(data => {
                    if (data instanceof NavigationStart) {
                        this.pageIsLoading = true;
                    } else if (data instanceof NavigationEnd) {
                        this.pageIsLoading = false;
                    }
                }));
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
