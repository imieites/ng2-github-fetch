import { Component, OnInit } from '@angular/core';
import {GithubFetchService} from '../github-fetch.service';

@Component({
  selector: 'app-gf-list',
  templateUrl: './gf-list.component.html',
  styleUrls: ['./gf-list.component.css']
})
export class GfListComponent implements OnInit {
  usersList = [];


  constructor(private gfService:GithubFetchService) {
    gfService.userSearchQuery$.subscribe(value =>{
      this.getUserList(value);
    })
  }

  ngOnInit() {

  }

  getUserList(nameQuery:string){
    //let resource:string = '/search/users?q=';
    this.gfService.getUserList(nameQuery).subscribe(res => {
      this.usersList = res.json()['items'];
    });
  }

}
