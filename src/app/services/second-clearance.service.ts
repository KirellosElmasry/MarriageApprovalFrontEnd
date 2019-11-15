import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SecondClearance } from '../utils/SecondClearance';

@Injectable({
  providedIn: 'root'
})
export class SecondClearanceService {

  endpoint:string = 'http://localhost:8080/api/secondClearance';
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  saveSecondClearance(secondClearance: SecondClearance): Observable<any> {
    return this.http.post(this.endpoint + '/newSecondClearance', secondClearance, 
    {responseType:'json'});
  }

}
