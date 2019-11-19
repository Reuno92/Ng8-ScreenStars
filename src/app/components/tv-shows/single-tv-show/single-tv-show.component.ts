import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable } from 'rxjs';
import {TvShowHttpService} from '../../../_shared/services/http/tv-show-http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {IMAGES_HOST_SECURE} from '../../../constant/api.constant';
import {TvShowTabsetService} from '../../../_shared/services/tabset/tv-show-tabset.service';
import {Tabset} from '../../../_shared/models/tabset';
import {TV} from '../../../_shared/models/TV';

@Component({
  selector: 'app-single-tv-show',
  templateUrl: './single-tv-show.component.html',
  styleUrls: ['./single-tv-show.component.scss']
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
                     private tvShowTabsetService: TvShowTabsetService) {
    this.imagesLinks = IMAGES_HOST_SECURE;
    this.tabsOptions = this.tvShowTabsetService.tabsOptions;
  }

  public ngOnInit() {
    this.getTVShow();
  }

  private getTVShow() {
    this.loadingTvShow = true;
    this.tvShow$ = this.tvService.getTVShow(this.id);
  }
}
