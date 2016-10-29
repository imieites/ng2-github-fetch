import { Component, OnInit } from '@angular/core';
import {GithubFetchService} from '../github-fetch.service';


@Component({
  selector: 'app-gf-list',
  templateUrl: './gf-list.component.html',
  styleUrls: ['./gf-list.component.css']
})
export class GfListComponent implements OnInit {
  usersList = [];


  constructor(private gfService:GithubFetchService) { }

  ngOnInit() {
    this.gfService.getUserList('asdf').subscribe(res => {
      this.usersList = res.json()['items'];
      console.log(this.usersList);
    });
  }


}
