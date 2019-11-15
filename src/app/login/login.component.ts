import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { user } from "../utils/user";
import { Router } from '@angular/router';
import { loginResult } from '../utils/loginResult';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  role: string;
  loginResult: loginResult;
  loginUser = new user();
  showSpinner : boolean = false;

  constructor(public loginService: LoginService,private router:Router) { }

  ngOnInit() {}

  onLogin(){
    this.showSpinner = true;
    //console.log(this.userName+"  "+ this.password);
    this.loginUser.userName = this.userName;
    this.loginUser.password = this.password;

    this.loginService.doLogin(this.loginUser)
    .subscribe(
      data=>
      {
        this.showSpinner = false;
        this.loginResult = data;    
        console.log("  this.loginResult.message "+this.loginResult.message);          
        if(this.loginResult.message == "Login Successfully"){
          
          console.log("Login success role is "+ this.loginResult.role);
          sessionStorage.setItem('role', this.loginResult.role);

          this.router.navigate(['welcome']);
        }else{
          console.log("wrong username or password!");
        }
      } , (err) => {
        console.log("error "+err.message);
        alert(" Error in login process: "+err.message);
      });
    
  }
}
