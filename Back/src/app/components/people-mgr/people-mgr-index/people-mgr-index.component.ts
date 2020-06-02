import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-mgr-index',
  templateUrl: './people-mgr-index.component.html',
  styleUrls: ['./people-mgr-index.component.css']
})
export class PeopleMgrIndexComponent implements OnInit {
  
  hide:boolean=true;
  Peoples:string[]=['余大佬','李大佬'];

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(){
    alert("还没做，想啥呢");
  }

}
