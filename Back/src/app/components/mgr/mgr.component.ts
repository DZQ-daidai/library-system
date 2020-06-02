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
}
