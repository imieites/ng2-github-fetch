import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gf-form',
  templateUrl: './gf-form.component.html',
  styleUrls: ['./gf-form.component.css']
})
export class GfFormComponent implements OnInit {
  model = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    plan:''
  }
  planes = ['Basico','Intermedio','Premium'];
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
