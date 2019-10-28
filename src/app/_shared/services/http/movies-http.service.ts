import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {MOVIE, MOVIE_SUFFIX, MOVIES_SUFFIX, HOST, KEY} from "../../../constant/api.constant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {

  private path_movie = MOVIE + KEY;
  private path_latest = MOVIE + MOVIES_SUFFIX.latest + KEY;
  private path_popular = MOVIE + MOVIES_SUFFIX.popular + KEY;

  constructor(private http: HttpClient) { }

  public getLatestMovies(): Observable<any> {
    return this.http.get(this.path_latest, {
      headers: new HttpHeaders(),
      responseType: "json"
    });
  }

  public getPopularMovies(): Observable<any> {
    return this.http.get(this.path_popular, {
      headers: new HttpHeaders(),
      responseType: "json"
    });
  }
}
