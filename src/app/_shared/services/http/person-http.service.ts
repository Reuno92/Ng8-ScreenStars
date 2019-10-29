import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KEY, PERSON, PERSONS_SUFFIX, PERSON_SUFFIX} from '../../../constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class PersonHttpService {

  public pathPopular = PERSON + PERSONS_SUFFIX.popular + KEY;
  public pathPerson = PERSON;

  constructor(private http: HttpClient) { }

  public getPopularPersons(): Observable<any> {
    return this.http.get(this.pathPopular, { headers: new HttpHeaders(), responseType: 'json'});
  }

  public getPerson(id: number): Observable<any> {
    return this.http.get(this.getPathPerson(id), { headers: new HttpHeaders(), responseType: 'json'});
  }

  private getPathPerson(id: number) {
    return PERSON + id + KEY;
  }
}
