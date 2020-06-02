import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookbox',
  templateUrl: './bookbox.component.html',
  styleUrls: ['./bookbox.component.css']
})
export class BookboxComponent implements OnInit {

  @Input() BookID;

  constructor() { }

  ngOnInit(): void {
  }

  editBook(){
    alert("还没做，想桃子呢");
  }
}
