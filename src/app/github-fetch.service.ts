import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Http, Headers, Response, URLSearchParams, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class GithubFetchService {
  //baseUrl:string = 'https://api.github.com';

  private _userSearchQuery = new Subject<string>();
  userSearchQuery$ = this._userSearchQuery.asObservable();

  constructor(private http: Http) { }

  getUserList(nameQuery:string){
    //let resource:string = '/search/users?q=';
    return this.http.get('https://api.github.com/search/users?q=ignacio');
  }

  getUser(name:string){

  }

  setNewUsersQuery(value:string){
		this._userSearchQuery.next(value);
	}

}
