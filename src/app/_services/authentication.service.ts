import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService{
    constructor(private http: Http){}

    login(userName: string, password: string){
        return this.http.post(' http://localhost:1337/login', JSON.stringify({userName: userName, password: password}))
            .map((response: Response) =>{
                let user = response.json();
                if(user.response.data.user && user.response.data.token){
                    localStorage.setItem('currentUser', JSON.stringify(user.response.data));
                }
                return user;
            });
    }

    logout(){
        localStorage.removeItem('currentUser');
    }

    readUser(){
        localStorage.getItem('currentUser');
    }
}