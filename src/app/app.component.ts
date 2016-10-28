import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>
      {{title}}
    </h1>
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
