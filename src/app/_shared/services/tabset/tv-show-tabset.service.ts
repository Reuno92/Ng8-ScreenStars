import { Injectable } from '@angular/core';
import {Tabset} from '../../models/tabset';

@Injectable({
  providedIn: 'root'
})
export class TvShowTabsetService {

  public tabs: Array<Tabset>;
  public tabsOptions: Array<Tabset>;
  constructor() {
    this.tabs = [];
    this.tabsOptions = [
      {id: 1, name: 'Detail', urlPrefix: '/tv-show/', urlSuffix: '/detail'},
      {id: 2, name: 'Casting', urlPrefix: '/tv-show/', urlSuffix: '/casting'},
      {id: 3, name: 'Review', urlPrefix: '/tv-show/', urlSuffix: '/review'},
      {id: 4, name: 'Recommendation', urlPrefix: '/tv-show/', urlSuffix: '/recommendation'},
      {id: 5, name: 'Similar', urlPrefix: '/tv-show/', urlSuffix: '/similar'},
      {id: 6, name: 'Territorial', urlPrefix: '/tv-show/', urlSuffix: '/territorial'},
      {id: 7, name: 'Videos', urlPrefix: '/tv-show/', urlSuffix: '/videos'},
      {id: 8, name: 'Visuals', urlPrefix: '/tv-show/', urlSuffix: '/visuals'}
    ];
  }
}
