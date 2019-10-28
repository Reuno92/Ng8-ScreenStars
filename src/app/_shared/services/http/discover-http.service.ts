import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import { DISCOVER_MOVIE, KEY} from "../../../constant/api.constant";

@Injectable({
  providedIn: 'root'
})
export class DiscoverHttpService {

  private options_path = `&language=en&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&limit=3`;
  private path_movie = DISCOVER_MOVIE + KEY + this.options_path;

  constructor(private http: HttpClient) { }

  public getDiscover(): Observable<any> {
    return this.http.get(this.path_movie, {headers: new HttpHeaders(), responseType: "json"});
  }
}
