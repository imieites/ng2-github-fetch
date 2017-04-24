import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gf-form',
  templateUrl: './gf-form.component.html',
  styleUrls: ['./gf-form.component.css']
})

/**
  Componente de prueba de Forms, + info en:
  https://angular.io/docs/ts/latest/guide/forms.html#!#ngForm
*/

export class GfFormComponent implements OnInit {
  loading= false;
  model = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    plan:''
  }
  planes = ['Basico','Intermedio','Premium'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    }, 5000);
  }
}
