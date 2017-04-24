import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-gf-form',
  templateUrl: './gf-form.component.html',
  styleUrls: ['./gf-form.component.css']
})
export class GfFormComponent implements OnInit {
  model = new User(19,'Logan');
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

}
