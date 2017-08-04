import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/index';
import { LoginComponent } from './login/index';
import { PollComponent } from './poll/index';
import { CreatePollComponent } from './createpoll/index';
import { RegisterComponent } from './register/index';
import { PollDetailsComponent } from './polldetails/index'
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    {path: 'profile', component: HomeComponent, canActivate: [AuthGuard]},
    {path:'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', component: PollComponent},
    {path:'create',component: CreatePollComponent},
    {path: 'polldetail/:id', component: PollDetailsComponent },
    
    //otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);