import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TVSHOW_SUFFIX, TVSHOWS_SUFFIX} from '../../../constant/api.constant';
import {Credit, Rating, Recommendation, Review, Similar, Translation, TV, Video} from '../../models/TV';
import {PathHttpService} from '../../utils/path-http.service';

@Injectable({
  providedIn: 'root'
})
export class TvShowHttpService {

  constructor(private http: HttpClient, private pathHttpService: PathHttpService) { }

  public getPopularTVShow(): Observable<any> {
    return this.http.get(this.getPathTvShow('', TVSHOWS_SUFFIX.popular),
      {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getLatestTVShow(): Observable<any> {
    return this.http.get(this.getPathTvShow('', TVSHOWS_SUFFIX.latest),
      {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getTVShow(id): Observable<TV> {
    return this.http.get<TV>(this.getPathTvShow(id),
      {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getCreditTvShow(id): Observable<Credit> {
    return this.http.get<Credit>(this.getPathTvShow(id, TVSHOW_SUFFIX.credits),
      {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getReviewTvShow(id): Observable<Review> {
    return this.http.get<Review>(this.getPathTvShow(id, TVSHOW_SUFFIX.reviews),
      {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getRecommendations(id): Observable<Recommendation> {
    return this.http.get<Recommendation>(this.getPathTvShow(id, TVSHOW_SUFFIX.recommendations),
      { headers: new HttpHeaders(), responseType: 'json'});
  }

  public getSimilarTVShow(id): Observable<Similar> {
    return this.http.get<Similar>(this.getPathTvShow(id, TVSHOW_SUFFIX.similar),
      {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getContentTVShow(id): Observable<Rating> {
    return this.http.get<Rating>(this.getPathTvShow(id, TVSHOW_SUFFIX.content_rating),
      {headers: new HttpHeaders(), responseType: 'json'})
  }

  public getTranslationsTVShow(id): Observable<Translation> {
    return this.http.get<Translation>(this.getPathTvShow(id, TVSHOW_SUFFIX.translations),
      {headers: new HttpHeaders(), responseType: 'json'})
  }

  public getVideosTVShow(id): Observable<Video> {
    return this.http.get<Video>(this.getPathTvShow(id, TVSHOW_SUFFIX.videos),
      {headers: new HttpHeaders(), responseType: 'json'})
  }

  /**
   * Help to create a path with api.
   * It's better one method than a multiple methods for each endpoint
   * @param id
   * @param suffix
   * @param prefix empty string by default
   */
  private getPathTvShow(id = '', suffix = '', prefix = '') {
    return this.pathHttpService.getPathTvShow(id, suffix, prefix);
  }
}
