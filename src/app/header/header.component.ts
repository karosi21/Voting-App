import { Component, OnInit, OnDestroy} from '@angular/core';
import {  Router } from '@angular/router';
import { AuthenticationService, AlertService } from '../_services/index'

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    user:any;
    name:string;
    constructor( private authentication: AuthenticationService, private router: Router){
    }

    ngOnInit(){
       this.isUserLogin();
    }

    isUserLogin(){
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        if(this.user){
        this.name = this.user.user.userName.charAt(0).toUpperCase() + this.user.user.userName.slice(1);
        }else{
            this.name = "";
        }
    }

    logout(){
        this.authentication.logout();
        this.router.navigate(['/login']);
        // window.location.reload(true);
    }
    
}