import { Component } from '@angular/core';
import {GithubFetchService} from './github-fetch.service';

@Component({
  selector: 'app-root',
  template:`
    <h1>
      {{title}}
    </h1>
    <!-- Routed views go here -->
    <router-outlet></router-outlet>
    `,
  styles:[`
    h1 {
    text-align: center
    }
`],
providers: [GithubFetchService]
})
export class AppComponent {
  title = 'NG2 Github Fetch';
}
