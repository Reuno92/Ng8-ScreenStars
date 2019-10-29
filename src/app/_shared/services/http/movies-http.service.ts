import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {MOVIE, MOVIES_SUFFIX, KEY} from '../../../constant/api.constant';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {

  private pathMovie = MOVIE + KEY;
  private pathLatest = MOVIE + MOVIES_SUFFIX.latest + KEY;
  private pathPopular = MOVIE + MOVIES_SUFFIX.popular + KEY;

  constructor(private http: HttpClient) { }

  public getLatestMovies(): Observable<any> {
    return this.http.get(this.pathLatest, {
      headers: new HttpHeaders(),
      responseType: 'json'
    });
  }

  public getPopularMovies(): Observable<any> {
    return this.http.get(this.pathPopular, {
      headers: new HttpHeaders(),
      responseType: 'json'
    });
  }

  public getMovies(id): Observable<any> {
    return this.http.get(this.pathMovie + id, {
      headers: new HttpHeaders(),
      responseType: 'json'
    });
  }
}
