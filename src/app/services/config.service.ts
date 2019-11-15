import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map} from 'rxjs/operators';
import { DTO } from '../utils/DTO';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  endpoint:string = 'http://localhost:8080/api/config';
  
  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getConfig(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/allApplicationConfigs' ).pipe(
      map(this.extractData));
  }

  updateConfig(dto: DTO):
  Observable<any>{
    return this.httpClient.put(this.endpoint+"/updateApplicationConfig",dto, 
    {responseType:'json'});
  }

 /*  constructor(private http: HttpClient) {
    this.getConfigJSON().subscribe(data => {
        console.log(data);
    });
}

public getConfigJSON(): Observable<any> {
    return this.http.get("./assets/configFile.json");
} */


}
