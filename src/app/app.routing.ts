import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/index';
import { LoginComponent } from './login/index';
import { PollComponent } from './poll/index';
// import { PollAnswerComponent } from './pollanswer/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path:'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'poll', component: PollComponent},
    // {path: 'vote', component: PollAnswerComponent },
    //otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);