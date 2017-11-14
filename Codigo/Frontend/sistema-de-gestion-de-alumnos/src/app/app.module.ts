import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import {LoginModule} from './components/login/login.module';
import {LayoutModule} from './components/layout/layout.module';

import {UserResolve} from './resolves/user.resolve';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      LoginModule,
      LayoutModule,
      RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
      UserResolve,
      HttpModule,
      HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
