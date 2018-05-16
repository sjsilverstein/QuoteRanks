import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from './http.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    EditAuthorComponent,
    NewAuthorComponent,
    QuoteListComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
