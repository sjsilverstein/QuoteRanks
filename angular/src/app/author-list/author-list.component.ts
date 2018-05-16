import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors : any[];

  constructor(private _httpService: HttpService) {
    this.getAuthors();
   }

  ngOnInit() {
  }
  getAuthors(){
    console.log("Get all the Authors");
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log(data);
      this.authors = data['authors'];
    });
  }
  deleteAuthor(id){
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data =>{
      this.getAuthors();
    });

  }

}
