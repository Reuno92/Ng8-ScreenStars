import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TvShowHttpService} from '../../../_shared/services/http/tv-show-http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {IMAGES_HOST} from '../../../constant/api.constant';

@Component({
  selector: 'app-single-tv-show',
  templateUrl: './single-tv-show.component.html',
  styleUrls: ['./single-tv-show.component.scss']
})
export class SingleTVShowComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('id');
  public tvShow$: Observable<any>;
  public loadingTvShow: boolean;
  public error: HttpErrorResponse;
  public imagesLinks: string;

  public titles: Array<string>;
  public content: any;

  public constructor(private route: ActivatedRoute,
                     private tvService: TvShowHttpService) {
    this.imagesLinks = IMAGES_HOST;
    this.titles = ['Detail', 'Casting', 'Review', 'Recommendation', 'Similar', 'Territorial', 'Videos', 'Visuals'];
    this.content = [];
  }

  public ngOnInit() {
    this.getTVShow();
  }

  private getTVShow() {
    this.loadingTvShow = true;
    this.tvService.getTVShow(this.id).subscribe(
      data => this.tvShow$ = data,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingTvShow = false
    );
  }
}
