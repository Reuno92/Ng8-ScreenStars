import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {TvShowHttpService} from '../../../../../_shared/services/http/tv-show-http.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Recommendation} from '../../../../../_shared/models/TV';
import {IMAGES_HOST_SECURE} from '../../../../../constant/api.constant';
import * as Countries from '../../../../../json/country-codes.json';
import * as Lang from '../../../../../json/language-codes.json';

@Component({
  selector: 'app-tv-show-recommendation',
  templateUrl: './tv-show-recommendation.component.html',
  styleUrls: ['./tv-show-recommendation.component.scss']
})
export class TvShowRecommendationComponent implements OnInit {

  public loadingComponent: boolean;
  public error: HttpErrorResponse;
  private id: string;

  /**
   *  If don't assign (Alias as any).default
   *  it's return undefined…
   */
  public countries: any;
  public languages: any;

  public tvShowRecommendation: Observable<Recommendation>;
  public imagesLinks: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private tvService: TvShowHttpService) {
    this.imagesLinks = IMAGES_HOST_SECURE;
    this.countries = (Countries as any).default;
    this.languages = (Lang as any).default;
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
