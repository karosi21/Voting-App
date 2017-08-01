import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    baseUrl: string = ' http://localhost:1337/';
    constructor(private http: Http){}
    
    getAll(){
            return this.http.get(this.baseUrl+'users', this.jwt())
                .map((response: Response) => response.json());
    }

    getById(id: string){
        return this.http.get(this.baseUrl+'user/'+id, this.jwt())
                .map((response: Response) => response.json());
    }

    create(user: User){
        return this.http.post(this.baseUrl+'user',user, this.jwt())
                .map((response: Response) => response.json());
    }

    update(id:string,user:User){
        return this.http.put(this.baseUrl+ 'user/'+id,user, this.jwt())
                .map((response: Response) => response.json());
    }

    delete(id:string){
        return this.http.delete(this.baseUrl+'user/'+id, this.jwt())
                .map((response: Response) => response.json());
    }

    private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.token){
        let headers = new Headers({'Authorization': 'Bearer '+ currentUser.token});
        return new RequestOptions({headers: headers});
    }
}


}