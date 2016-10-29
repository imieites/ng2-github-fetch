import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class GithubFetchService {
  //baseUrl:string = 'https://api.github.com';

  constructor(private http: Http) { }

  getUserList(nameQuery:string){
    //let resource:string = '/search/users?q=';
    return this.http.get('https://api.github.com/search/users?q=ignacio');
  }

  getUser(name:string){

  }

}
