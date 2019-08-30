import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { user } from "../classes/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  loginResult:any;
  loginUser = new user();

  constructor(public loginService: LoginService,private router:Router) { }

  ngOnInit() {}

  onLogin(){
    //console.log(this.userName+"  "+ this.password);
    this.loginUser.userName = this.userName;
    this.loginUser.password = this.password;
    this.loginService.doLogin(this.loginUser)
    .subscribe(
      data=>
      {
        this.loginResult = data;                
        if(this.loginResult == "{'message':'Login Successfully'}"){
          console.log("Login success");
          this.router.navigate(['welcome']);
        }else{
          console.log("wrong username or password!");
        }
      }
    )
  }
}
