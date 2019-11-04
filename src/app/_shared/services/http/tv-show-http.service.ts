import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TV_SHOW, TVSHOWS_SUFFIX, TVSHOW_SUFFIX, KEY} from '../../../constant/api.constant';
import {TV} from '../../models/TV/tv';
import {Credit} from '../../models/TV/Credit';
import {Review} from '../../models/TV/Review';

@Injectable({
  providedIn: 'root'
})
export class TvShowHttpService {

  constructor(private http: HttpClient) { }

  public getPopularTVShow(): Observable<any> {
    return this.http.get(TV_SHOW + TVSHOWS_SUFFIX.popular + KEY, {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getLatestTVShow(): Observable<any> {
    return this.http.get(TV_SHOW + TVSHOWS_SUFFIX.latest + KEY, {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getTVShow(id): Observable<TV> {
    return this.http.get<TV>(this.getPathTvShow(id), {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getCreditTvShow(id): Observable<Credit> {
    return this.http.get<Credit>(this.getPathCreditTvShow(id), {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getReviewTvShow(id): Observable<Review> {
    return this.http.get<Review>(this.getPathReviewTvShow(id), {headers: new HttpHeaders(), responseType: 'json'});
  }

  private getPathTvShow(id): string {
    return TV_SHOW + '/' + id + KEY;
  }

  private getPathCreditTvShow(id): string {
    return TV_SHOW + '/' + id + TVSHOW_SUFFIX.credits + KEY;
  }

  private getPathReviewTvShow(id): string {
    return TV_SHOW + '/' + id + TVSHOW_SUFFIX.reviews + KEY;
  }
}
