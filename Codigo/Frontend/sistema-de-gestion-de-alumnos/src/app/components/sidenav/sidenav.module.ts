import {NgModule} from '@angular/core';
import {MatButtonModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SidenavComponent} from './sidenav.component';

@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        BrowserAnimationsModule
    ],
    declarations: [
        SidenavComponent
    ],
    exports: [
        SidenavComponent
    ]
})
export class SidenavModule {}
