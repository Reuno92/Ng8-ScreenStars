import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TV_SHOW, TVSHOWS_SUFFIX, TVSHOW_SUFFIX, KEY} from '../../../constant/api.constant';
import {TV} from '../../models/TV/tv';
import {Credit} from '../../models/TV/Credit';
import {Review} from '../../models/TV/Review';
import {Recommendation} from '../../models/TV/Reommendation';
import {Similar} from '../../models/TV/similar';
import {Translation} from '../../models/TV/Translation';
import {Rating} from '../../models/TV/Rating';

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
    return this.http.get<Review>(this.getPathReviewTvShow(id), );
  }

  public getRecommendations(id): Observable<Recommendation> {
    return this.http.get<Recommendation>(this.getRecommendationPathTvShow(id), { headers: new HttpHeaders(), responseType: 'json'});
  }

  public getSimilarTVShow(id): Observable<Similar> {
    return this.http.get<Similar>(this.getPathSimilarTvShow(id), {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getContentTVShow(id): Observable<Rating> {
    return this.http.get<Rating>(this.getPathContentRatingTvShow(id), {headers: new HttpHeaders(), responseType: 'json'})
  }

  public getTranslationsTVShow(id): Observable<Translation> {
    return this.http.get<Translation>(this.getPathTranslationTvShow(id), {headers: new HttpHeaders(), responseType: 'json'})
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

  private getRecommendationPathTvShow(id): string {
    return TV_SHOW + '/' + id + TVSHOW_SUFFIX.recommendations + KEY;
  }

  private getPathSimilarTvShow(id): string {
    return TV_SHOW + '/' + id + TVSHOW_SUFFIX.similar + KEY;
  }

  private getPathContentRatingTvShow(id): string {
    return TV_SHOW + '/' + id + TVSHOW_SUFFIX.content_rating + KEY;
  }

  private getPathTranslationTvShow(id): string {
    return TV_SHOW + '/' + id + TVSHOW_SUFFIX.translations + KEY;
  }
}
