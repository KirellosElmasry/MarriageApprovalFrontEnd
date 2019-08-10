import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { user } from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint:string = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  doLogin(loginUser:user):
  Observable<any>{
    return this.httpClient.post(this.endpoint+"user/login",loginUser, 
    {responseType:'text'});
  }
}
