import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Http, Headers, Response, URLSearchParams, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class GithubFetchService {
  baseUrl:string = 'https://api.github.com';
  userListEndpoint = '/search/users?q=';
  userEndpoint = '/users/';
  listaFavoritos = [];

  private _userSearchQuery = new Subject<string>();
  userSearchQuery$ = this._userSearchQuery.asObservable();

  constructor(private http: Http) { }

  getUserList(nameQuery:string){
    return this.http.get(this.baseUrl+this.userListEndpoint+nameQuery);
  }

  getUser(name:string){
    return this.http.get(this.baseUrl+this.userEndpoint+name);
  }

  setNewUsersQuery(value:string){
		this._userSearchQuery.next(value);
	}

  toggleFavorito(login:string){
    if(this.isFavorito(login)){ this.listaFavoritos.splice(this.listaFavoritos.indexOf(login), 1); }
    // el login NO existe en la lista
    else { this.listaFavoritos.push(login); }
  }

  isFavorito(login:string) {
    let index = this.listaFavoritos.indexOf(login);
    return index > -1;
  }

}
