import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : {
    username: string,
    password: string
  }


  hide = true;

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    alert("enter");
  }

}
