import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from  './app.routing'
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, PollService} from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { PollComponent } from "./poll/index";

// import { PollAnswerComponent } from "./pollanswer/index"

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PollComponent,
    // PollAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [AuthGuard,AlertService,AuthenticationService,UserService, PollService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
