import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable } from 'rxjs';
import {TvShowHttpService} from '../../../_shared/services/http/tv-show-http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {IMAGES_HOST_SECURE} from '../../../constant/api.constant';
import {CommonTabsetService} from '../../../_shared/services/tabset/common-tabset.service';
import {Tabset} from '../../../_shared/models/tabset';
import {TV} from '../../../_shared/models/TV';

@Component({
  selector: 'app-single-tv-show',
  templateUrl: './single-tv-show.component.html',
  styleUrls: ['./single-tv-show.component.scss'],
  providers: [CommonTabsetService]
})
export class SingleTVShowComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('id');
  public tvShow$: Observable<TV>;
  public loadingTvShow: boolean;
  public error: HttpErrorResponse;
  public imagesLinks: string;

  public tabsOptions: Array<Tabset>;

  public constructor(private route: ActivatedRoute,
                     private tvService: TvShowHttpService,
                     private tvShowTabsetService: CommonTabsetService) {
    this.imagesLinks = IMAGES_HOST_SECURE;
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
    this.tvShowTabsetService.tabsOptions = this.tabsOptions;
  }

  public ngOnInit() {
    this.getTVShow();
  }

  private getTVShow() {
    this.loadingTvShow = true;
    this.tvShow$ = this.tvService.getTVShow(this.id);
  }
}
