import { Injectable } from '@angular/core';
import {KEY, TV_SHOW} from '../../constant/api.constant';

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
}
