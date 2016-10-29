import { Component, OnInit } from '@angular/core';
import {GithubFetchService} from '../github-fetch.service';

@Component({
  selector: 'app-gf-search',
  templateUrl: './gf-search.component.html',
  styleUrls: ['./gf-search.component.css']
})
export class GfSearchComponent implements OnInit {
  myQuery:string = '';

  constructor(private gfService:GithubFetchService) {
  }

  ngOnInit() {
  }

  setNewUserQuery(query:string){

    this.gfService.setNewUsersQuery(this.myQuery);
  }

}
