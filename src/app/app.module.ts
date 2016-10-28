import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GfSearchComponent } from './gf-search/gf-search.component';
import { GithubFetchService } from './github-fetch.service';
import { GfListComponent } from './gf-list/gf-list.component'

@NgModule({
  declarations: [
    AppComponent,
    GfSearchComponent,
    GfListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
