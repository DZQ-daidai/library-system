import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peoplebox',
  templateUrl: './peoplebox.component.html',
  styleUrls: ['./peoplebox.component.css']
})
export class PeopleboxComponent implements OnInit {

  @Input() PeopleID;

  constructor() { }

  ngOnInit(): void {
  }

  editBook(){
    alert("还没做，想桃子呢");
  }
}
