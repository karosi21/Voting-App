import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Poll } from '../_models/poll';
// import { Jwt } from './jwt';

@Injectable()
export class PollService {
    baseUrl: string = ' http://localhost:1337/';
    constructor(private http: Http){}

    getAll(){
        return this.http.get(this.baseUrl+'polls', this.jwt())
            .map((response: Response) => response.json());
    }

     getById(id: string){
         return this.http.get(this.baseUrl+'poll/'+id, this.jwt())
            .map((response: Response) => response.json());
    }

    create(poll: Poll){
        return this.http.post(this.baseUrl+'poll',poll,this.jwt())
            .map((response: Response) => response.json());
    }

    vote(id: string, poll: Poll){
        return this.http.put(this.baseUrl+"poll/"+id,poll, this.jwt())
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