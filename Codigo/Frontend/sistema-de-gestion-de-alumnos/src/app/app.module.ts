import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import {ROUTES} from './app.routes';
import {LoginModule} from './components/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(ROUTES, {useHash: true}),
      LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
