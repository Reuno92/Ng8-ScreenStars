import { Injectable } from '@angular/core';
import {KEY, TV_SHOW, SEASON, EPISODE, HOST} from '../../constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class PathHttpService {

  constructor() { }

  /**
   * Help to create a path with api.
   * It's better one method than a multiple methods for each endpoint
   * @param id - empty string by default
   * @param suffix - same as id, it's in front of because it's most used.
   * @param prefix - same as id
   */
  public getPathTvShow(id = '', suffix = '', prefix = '') {
    return TV_SHOW + '/' + prefix + id + suffix + KEY;
  }

  public getPathSeason(id, seasonNumber, suffix = '') {
    return TV_SHOW + '/' + id + SEASON + '/' + seasonNumber + suffix + KEY;
  }

  public getPathEpisode(id = '', suffix = '', prefix = '') {
    return EPISODE + '/' + prefix + id + suffix + KEY;
  }
}
