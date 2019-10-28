import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {MOVIE, MOVIE_SUFFIX, MOVIES_SUFFIX, HOST, KEY} from "../../../constant/api.constant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {

  private path_movie = MOVIE + KEY;

  constructor(private http: HttpClient) { }

  public getlatestMovies(): Observable<any> {
    return this.http.get(this.path_movie + MOVIES_SUFFIX.latest, {
      headers: new HttpHeaders(),
      responseType: "json"
    });
  }

  public getPopularMovies() {
    return this.http.get(this.path_movie + MOVIES_SUFFIX.popular, {
      headers: new HttpHeaders(),
      responseType: "json"
    });
  }
}
