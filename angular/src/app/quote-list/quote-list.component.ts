import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {


  author;
  authorId;

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
      console.log(data);
    });
  }
  upVoteQuote(quote){
    console.log("UpVote")
    quote.votes++
    let context = {authorId: this.authorId, quote: quote}
    let obversable = this._httpService.updateQuote(context);
    obversable.subscribe(data=>{
      console.log(data);
    })    
  }
  downVoteQuote(quote){
    console.log("DownVote")
    quote.votes--
    let context = {authorId: this.authorId, quote: quote}
    let obversable = this._httpService.updateQuote(context);
    obversable.subscribe(data=>{
      console.log(data);
    })    
  }

}
