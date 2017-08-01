import { Headers, RequestOptions} from '@angular/http';

export class Jwt{
    jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.token){
        let headers = new Headers({'Authorization': 'Bearer '+ currentUser.token});
        return new RequestOptions({headers: headers});
    }
    }
}
