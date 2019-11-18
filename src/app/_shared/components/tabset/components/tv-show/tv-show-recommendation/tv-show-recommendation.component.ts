import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {TvShowHttpService} from '../../../../../services/http/tv-show-http.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Recommendation} from '../../../../../models/TV/Reommendation';
import { IMAGES_HOST } from '../../../../../../constant/api.constant';

@Component({
  selector: 'app-tv-show-recommendation',
  templateUrl: './tv-show-recommendation.component.html',
  styleUrls: ['./tv-show-recommendation.component.scss']
})
export class TvShowRecommendationComponent implements OnInit {

  public loadingComponent: boolean;
  public error: HttpErrorResponse;
  private id: string;

  public tvShowRecommendation: Observable<Recommendation>;
  public imagesLinks: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private tvService: TvShowHttpService) {
    this.imagesLinks = IMAGES_HOST;
  }

  ngOnInit() {
    this.getRecommendationTVShow();
  }

  private getRecommendationTVShow() {
    this.getId();
    this.tvShowRecommendation = this.tvService.getRecommendations(this.id);
  }

  private getId(): void {
    this.route.parent.params.subscribe(
      data => this.id = data.id,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingComponent = false
    );
  }
}
