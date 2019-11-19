import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MOVIES_LIST, TV_LIST } from '../../../constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class GenreHttpService {


  constructor(private http: HttpClient) {}

  public getGenreMoviesList(): Observable<any> {
    return this.http.get(MOVIES_LIST, {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getGenreTvList(): Observable<any> {
    return this.http.get(TV_LIST, {headers: new HttpHeaders(), responseType: 'json'});
  }
}
