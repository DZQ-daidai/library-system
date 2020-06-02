import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //导入路由
import {MatSnackBar} from '@angular/material/snack-bar'; //SnackBar

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  hide = true;

  constructor(public router: Router,private _snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  onSubmit(){
    if (this.username == undefined || this.password == undefined){
      this.openSnackBar("账号/密码错误","确认");
    }
    else{
      if (this.username == "admin" && this.password == "admin") {
        //临时，TODO数据库连接
        this.router.navigateByUrl('mgr');
      }
    }
  }

}
