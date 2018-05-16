import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

const routes: Routes = [
  { path: '',component: AuthorListComponent },
  { path: 'newAuthor',component: NewAuthorComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'edit/:id', component: EditAuthorComponent },
  { path: 'author/quotes/:id', component: QuoteListComponent },
  { path: 'quotes/new/:id', component: NewQuoteComponent }
  // // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
