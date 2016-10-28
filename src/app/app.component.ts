import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>
      {{title}}
    </h1>
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <app-gf-search></app-gf-search>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <app-gf-list></app-gf-list>
      </div>
    </div>

    `,
  styles:[`
    h1 {
    text-align: center
    }
`]
})
export class AppComponent {
  title = 'NG2 Github Fetch';
}
