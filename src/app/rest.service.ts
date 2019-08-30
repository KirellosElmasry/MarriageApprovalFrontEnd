import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { person } from './classes/person';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  person : person;

  endpoint = 'http://localhost:8080/api/';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPerson(eId): Observable<any> {
    return this.http.get(this.endpoint + 'person/' + eId).pipe(
      map(this.extractData));
  }

  savePerson(person: person): Observable<any> {
    return this.http.post(this.endpoint + 'newPerson/', person).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
