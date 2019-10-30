import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMAGES_HOST} from '../../../../../../constant/api.constant';
import {TvShowHttpService} from '../../../../../services/http/tv-show-http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tv-show-review',
  templateUrl: './tv-show-review.component.html',
  styleUrls: ['./tv-show-review.component.scss']
})
export class TvShowReviewComponent implements OnInit {

  public id: string;

  public tvShowReview$: Observable<any>;
  public error: HttpErrorResponse;
  public loadingTvShow: boolean;

  public loadingComponent: boolean;

  constructor(private tvService: TvShowHttpService,
              private route: ActivatedRoute) {}

  public ngOnInit() {
    this.getReviewTVShow();
  }

  private getReviewTVShow(): void {
    this.loadingTvShow = true;
    this.getId();
    this.tvService.getReviewTvShow(this.id).subscribe(
      data => this.tvShowReview$ = data,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingTvShow = false
    );
  }

  private getId(): void {
    this.loadingComponent = true;
    this.route.parent.params.subscribe(
      data => this.id = data.id,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingComponent = false
    );
  }}
