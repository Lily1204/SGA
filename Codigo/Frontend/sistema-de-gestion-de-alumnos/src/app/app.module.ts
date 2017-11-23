import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {ROUTES} from './app.routes';

import {AppComponent} from './app.component';

import {LoginModule} from './components/login/login.module';
import {LayoutModule} from './components/layout/layout.module';

import {ProfessorResolve} from './resolves/professor.resolve';

import {UserService} from './services/user.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LoginModule,
        LayoutModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        CommonModule
    ],
    providers: [
        UserService,
        ProfessorResolve,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
