import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-mgr-index',
  templateUrl: './book-mgr-index.component.html',
  styleUrls: ['./book-mgr-index.component.css']
})
export class BookMgrIndexComponent implements OnInit {

  hide:boolean=true;

  Books:string[]=['高等数学','牛逼数学','超强数学'];

  showBooks:string[]=this.Books;

  searchValue:string;

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(){
    alert(this.searchValue);
    for (var i = 0;i < this.Books.length; ++i) {
      if (this.Books[i] == this.searchValue){
        this.showBooks = [];
        this.showBooks.push(this.Books[i]);
      }
    }
  }
}
