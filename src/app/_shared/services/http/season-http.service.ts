import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PathHttpService} from '../../utils/path-http.service';
import {Observable} from 'rxjs';
import {SeasonDetail, SeasonExternalId} from '../../models/season/';
import {SEASON_SUFFIX} from '../../../constant/api.constant';
import {Credit, ImagesResult, Video} from '../../models/TV';

@Injectable({
  providedIn: 'root'
})
export class SeasonHttpService {

  constructor(private http: HttpClient, private pathHttpService: PathHttpService) {
  }

  public getSeasonDetail(id, seasonNumber): Observable<SeasonDetail> {
    return this.http.get<SeasonDetail>(this.getPathSeason(id, seasonNumber),
      {headers: new HttpHeaders(), responseType: 'json'});
  }

  public getSeasonExternalIds(id, seasonNumber): Observable<SeasonExternalId> {
    return this.http.get<SeasonExternalId>(this.getPathSeason(id, seasonNumber, SEASON_SUFFIX.externalIds));
  }

  public getSeasonCredits(id, seasonNumber): Observable<Credit> {
    return this.http.get<Credit>(this.getPathSeason(id, seasonNumber, SEASON_SUFFIX.credits));
  }

  public getSeasonImages(id, seasonNumber): Observable<ImagesResult> {
    return this.http.get<ImagesResult>(this.getPathSeason(id, seasonNumber, SEASON_SUFFIX.images));
  }

  public getSeasonVideo(id, seasonNumber): Observable<Video> {
    return this.http.get<Video>(this.getPathSeason(id, seasonNumber, SEASON_SUFFIX.videos));
  }

  private getPathSeason(id, seasonNumber, suffix = '') {
    return this.pathHttpService.getPathSeason(id, seasonNumber, suffix);
  }
}
