import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  //These routes match up with restful routing in the server / config / routing.js file.
  getAuthors(){
    return  this._http.get('/authors');
  }
  getAuthorBy(id){
   return this._http.get('/author/'+id)
  }
  createAuthor(newAuthorData){
  console.log (newAuthorData);
  return this._http.post('/authors', newAuthorData);
  }
  deleteAuthor(id){
   return this._http.delete('/authors/'+id);
  }
  updateAuthor(data){
   return this._http.put('/authors/edit/'+data._id, data);
  }
  createQuote(newQuoteData){
    console.log(newQuoteData);
    return this._http.put('/newQuoteBy/'+newQuoteData.author._id, newQuoteData.quote)
  }
  updateQuote(data){
    return this._http.put('/updateQuote/'+data.authorId, data.quote);
  }
}
