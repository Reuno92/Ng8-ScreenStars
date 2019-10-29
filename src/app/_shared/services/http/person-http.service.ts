import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonHttpService {

  constructor(private http: HttpClient) { }

  public getPopularPersons(): Observable<any> {
    return this.http.get('', { headers: new HttpHeaders(), responseType: 'json'});
  }

  public getPerson(): Observable<any> {
    return this.http.get('', { headers: new HttpHeaders(), responseType: 'json'});
  }
}
