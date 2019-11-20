import {Injectable} from '@angular/core';
import {Tabset} from '../../models/tabset';

@Injectable({
  providedIn: 'root'
})
export class CommonTabsetService {

  public tabs: Array<Tabset>;
  public tabsOptions: Array<Tabset>;

  constructor() {
    this.tabs = [];
  }
}
