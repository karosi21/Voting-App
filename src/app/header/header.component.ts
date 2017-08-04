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
    constructor(){
    }

    ngOnInit(){
       this.isUserLogin();
    }
    isUserLogin(){
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
    
}