import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  author;
  authorId;
  newQuote = {content: ''};
  errorL;

  constructor(private _httpService: HttpService,  
              private _route: ActivatedRoute,
              private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.authorId = params['id']
      this.getAuthorService(this.authorId);      
    });    
  }
  getAuthorService(id){
    let obversable = this._httpService.getAuthorBy(this.authorId);
    obversable.subscribe(data=>{
      this.author = data;
    })
  }
  newQuoteForm(){
    let data = { author: this.author, quote: this.newQuote, }
    console.log(data);
    let observable = this._httpService.createQuote(data);
    observable.subscribe(data=>{
      if(data['status']== 'errors'){
        this.errorL = data['errors']
        console.log(this.errorL);
        console.log(this.errorL['errors']['quotes']['errors']['content']['message']);
      }else{
        this._router.navigate(['/author/quotes/'+this.authorId]);
      }
    });
  }

}
