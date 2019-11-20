import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {TvShowHttpService} from '../../../../../_shared/services/http/tv-show-http.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Similar} from '../../../../../_shared/models/TV';
import {IMAGES_HOST_SECURE} from '../../../../../constant/api.constant';
import * as Countries from '../../../../../json/country-codes.json';
import * as Lang from '../../../../../json/language-codes.json';

@Component({
  selector: 'app-tv-show-similar',
  templateUrl: './tv-show-similar.component.html',
  styleUrls: ['./tv-show-similar.component.scss']
})
export class TvShowSimilarComponent implements OnInit {

  private id: number;
  private error: HttpErrorResponse;
  private loadingComponent: boolean;

  private similarTvShow$: Observable<Similar>;
  private imagesLinks: string;

  public countries: any;
  public languages: any;

  constructor(private tvShowHttpService: TvShowHttpService, private route: ActivatedRoute) {
    this.imagesLinks = IMAGES_HOST_SECURE;
    this.loadingComponent = false;

    this.countries = (Countries as any).default;
    this.languages = (Lang as any).default;
  }

  ngOnInit() {
    this.getSimilarTvShow();
  }

  getSimilarTvShow() {
    this.getId();
    this.similarTvShow$ = this.tvShowHttpService.getSimilarTVShow(this.id);
  }

  private getId(): void {
    this.route.parent.params.subscribe(
      data => this.id = data.id,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingComponent = false
    );
  }
}
