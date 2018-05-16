import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  authors : any[];
  newAuthor = {name:""}
  errorL;
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) { 
    this.getAuthors();
  }

  ngOnInit() {
  
  }
  getAuthors(){

  }
  newAuthorForm(){
    let observable = this._httpService.createAuthor(this.newAuthor);
    observable.subscribe(data=>{
      console.log(data);
      if(data['status'] == 'errors'){
        this.errorL = data['errors']
        console.log(this.errorL);
      }else{
      this._router.navigate(['/'])
      }
    });
  }
  
}