import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})


export class HomeComponent implements OnInit {
    currentUser: User;
    loading:boolean = false
    users: User[] = [];
    userById:User;
    regUser:any;
    updateUserVal: User;
    isUserAdmin:any;
    public  adminData: any; public adminJson:any;

    constructor(private userService: UserService, private authentication: AuthenticationService, private router: Router){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(){
        this.loadAllUsers();        
    }

    logout(){
        this.authentication.logout();
        this.router.navigate(['/login']);
    }

    getUserById(id:string){
        this.userService.getById(id).subscribe(user => this.userById = user.response.data);
    }

    updateUser(updateId:string,user){
        this.loading = true;
        this.userService.update(this.updateUserVal.id,this.updateUserVal).subscribe( (res) =>{
                res
                this.router.navigate(['/login'])
            });
        }

    getUserForUpdate(id:string){
        this.userService.getById(id).subscribe(user => this.updateUserVal = user.response.data);
    }

    deleteUser(id: string){
        this.userService.delete(id).subscribe(() => {this.loadAllUsers()});
        this.router.navigate(['/login']);
    }

    private loadAllUsers(){
        this.loadUser();
        if(this.isUserAdmin){
        this.userService.getAll().subscribe(users => {this.users.push(users.response.data)})
        }
        else{
            this.regUser = JSON.parse( localStorage.getItem('currentUser'))
        }    
    }
 
    loadUser(){
       this.adminData = localStorage.getItem('currentUser');
       this.adminJson = JSON.parse(this.adminData);
        this.isUserAdmin = this.adminJson.user.isAdmin;
    }
}