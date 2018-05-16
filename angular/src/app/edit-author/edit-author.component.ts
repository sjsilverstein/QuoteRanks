import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  author;
  id;

  constructor(private _httpService: HttpService,  
              private _route: ActivatedRoute,
              private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
      this.getAuthorService(this.id);      
    });    
  }
  getAuthorService(id){
    let obversable = this._httpService.getAuthorBy(this.id);
    obversable.subscribe(data=>{
      this.author = data;
    })
  }
  editAuthorForm(){
    let obversable= this._httpService.updateAuthor(this.author);
    obversable.subscribe(data=>{
      console.log("Subscribed to Update Author Observable...");
      this._router.navigate(['/'])
    });
  }
  
}
