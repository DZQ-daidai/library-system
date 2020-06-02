import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar'; //SnackBar

@Component({
  selector: 'app-mgr',
  templateUrl: './mgr.component.html',
  styleUrls: ['./mgr.component.css']
})
export class MgrComponent implements OnInit {
  mode :string= "side";

  showBookMgr:boolean=false;
  showPeopleMgr:boolean=false;
  showBorrowReturnMgr:boolean=false;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  like(){
    this._snackBar.open("喜欢呆呆", "测试完毕", {
      duration: 10000,
    });
  }

  share(){
    this._snackBar.open("分享堂堂", "测试完毕", {
      duration: 10000,
    });
  }

  showBook(){
    this.showBookMgr = true;
    this.showPeopleMgr = false;
    this.showBorrowReturnMgr = false;
  }

  showPeople(){
    this.showBookMgr = false;
    this.showPeopleMgr = true;
    this.showBorrowReturnMgr = false;
  }

  showBorrowReturn(){
    this.showBookMgr = false;
    this.showPeopleMgr = false;
    this.showBorrowReturnMgr = true;
  }
}
