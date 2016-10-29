import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {GithubFetchService} from '../github-fetch.service';


@Component({
  selector: 'app-gf-detail',
  templateUrl: './gf-detail.component.html',
  styleUrls: ['./gf-detail.component.css']
})
export class GfDetailComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gfService:GithubFetchService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.getUser(params['userName']);
    })
  }

  getUser(name:string){
    this.gfService.getUser(name).subscribe(res => {
      this.user = res.json();
      console.log(this.user);
    });
  }

  goBack() {
    this.router.navigate(['']);
  }
}
