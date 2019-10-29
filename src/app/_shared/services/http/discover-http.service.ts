import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {DISCOVER_MOVIE, DISCOVER_TV, KEY} from '../../../constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class DiscoverHttpService {

  private optionsPath = `&language=en&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&limit=3`;
  private pathMovie = DISCOVER_MOVIE + KEY + this.optionsPath;
  private pathTV = DISCOVER_TV + KEY + this.optionsPath;

  constructor(private http: HttpClient) { }

  public getDiscoverMovie(): Observable<any> {
    return this.http.get(this.pathMovie, {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getDiscoverTV(): Observable<any> {
    return this.http.get(this.pathTV, {headers: new HttpHeaders(), responseType: 'json'});
  }
}
