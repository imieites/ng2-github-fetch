import { Component, OnInit } from '@angular/core';
import {GithubFetchService} from '../github-fetch.service';

@Component({
  selector: 'app-gf-list',
  templateUrl: './gf-list.component.html',
  styleUrls: ['./gf-list.component.css']
})
export class GfListComponent implements OnInit {
  usersList = [];
  loading:boolean = false;

  constructor(private gfService:GithubFetchService) {
    gfService.userSearchQuery$.subscribe(value =>{
      this.getUserList(value);
    })
  }

  ngOnInit() {

  }

  getUserList(nameQuery:string){
    this.loading = true;
    this.gfService.getUserList(nameQuery).subscribe(res => {
      this.usersList = res.json()['items'];
      this.loading = false;
    });
  }

}
