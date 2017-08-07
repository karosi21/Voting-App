import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from  './app.routing'
import { AlertComponent } from './_directives/index';
import { HeaderComponent } from './header/index'
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, PollService} from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { PollComponent } from "./poll/index";
import {PollDetailsComponent } from "./polldetails/index";
import { CreatePollComponent } from './createpoll/index'
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PollComponent,
    CreatePollComponent,
    PollDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ChartsModule
  ],
  providers: [AuthGuard,AlertService,AuthenticationService,UserService, PollService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
