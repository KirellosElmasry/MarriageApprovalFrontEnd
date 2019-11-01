import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';
import { person } from './classes/person';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  person: person;
  endpoint = 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPerson(emirateId): Observable<any> {
    return this.http.get(this.endpoint + 'api/person/' + emirateId).pipe(
      map(this.extractData));
  }

  savePerson(person: person): Observable<any> {
    return this.http.post(this.endpoint + 'api/newPerson/', person).pipe(
      map(this.extractData));
  }

  updatePerson(person: person): Observable<any> {
    return this.http.put(this.endpoint + 'api/updatePerson/', person).pipe(
      map(this.extractData));
  }

  uploadFile(file: File, refNum: string): Observable<any> {

   /*  let body = new HttpParams();
    let reader = new FileReader();

    reader.onload = (e) => {
      //me.modelvalue = reader.result;
    let base64Image = reader.result.toString();
    
    body = body.set('base64Image', base64Image);
    body = body.set('refNum', refNum);

    console.log(body.get("base64Image"));
    };
    reader.readAsText(file);
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 */
    const fd = new FormData();
    fd.append('base64Image', file, file.name);
    fd.append('refNum', refNum);

    console.log('file ', file.size);
    return this.http.post(this.endpoint + 'Util/upload/', fd).pipe(
      map(this.extractData));
  };

  private handleError<T>(operation = 'operation', result?: T) {
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
