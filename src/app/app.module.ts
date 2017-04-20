import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { GfSearchComponent } from './gf-search/gf-search.component';
import { GfListComponent } from './gf-list/gf-list.component'
import { GfDetailComponent } from './gf-detail/gf-detail.component'
import { GithubFetchService } from './github-fetch.service';
import { GfMainComponent } from './gf-main/gf-main.component';
import { GfFormComponent } from './gf-form/gf-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GfSearchComponent,
    GfListComponent,
    GfDetailComponent,
    GfMainComponent,
    GfFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'user/:userName', component: GfDetailComponent },
      { path: 'form', component: GfFormComponent },
      { path: '', component: GfMainComponent },
      { path: '**', component: GfMainComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
