import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {TvShowHttpService} from '../../../../../_shared/services/http/tv-show-http.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Observable, pipe} from 'rxjs';
import {IMAGES_HOST} from '../../../../../constant/api.constant';
import {map, switchMap, take} from 'rxjs/operators';
import {TV} from '../../../../../_shared/models/TV';

@Component({
  selector: 'app-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.scss']
})
export class TvShowDetailComponent implements OnInit {

  public id: string;

  public tvShow$: Observable<TV>;
  public error: HttpErrorResponse;
  public loadingTvShow: boolean;

  public imagesLinks = IMAGES_HOST;
  public loadingComponent: boolean;

  constructor(private route: ActivatedRoute,
              private tvService: TvShowHttpService) {
    this.loadingTvShow = true;
  }

  public ngOnInit(): void {
    this.getTVShow();
  }

  private getTVShow() {
    this.loadingTvShow = true;
    this.getId();
    this.tvShow$ = this.tvService.getTVShow(this.id);
  }

  private getId() {
    this.loadingComponent = true;
    this.route.parent.params.subscribe(
      data => this.id = data.id,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingComponent = false
    );
  }
}