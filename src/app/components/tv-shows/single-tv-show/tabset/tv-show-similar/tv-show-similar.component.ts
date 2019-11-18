import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {TvShowHttpService} from '../../../../../_shared/services/http/tv-show-http.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Similar} from '../../../../../_shared/models/TV';
import {IMAGES_HOST} from '../../../../../constant/api.constant';

@Component({
  selector: 'app-tv-show-similar',
  templateUrl: './tv-show-similar.component.html',
  styleUrls: ['./tv-show-similar.component.scss']
})
export class TvShowSimilarComponent implements OnInit {

  private id: number;
  private error: HttpErrorResponse;
  private loadingComponent: Boolean;

  private similarTvShow$: Observable<Similar>;
  private imagesLinks: string;

  constructor(private tvShowHttpService: TvShowHttpService, private route: ActivatedRoute) {
    this.imagesLinks = IMAGES_HOST;
    this.loadingComponent = false;
  }

  ngOnInit() {
    this.getSimilarTvShow();

    this.similarTvShow$.subscribe( data => console.log(data));
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
