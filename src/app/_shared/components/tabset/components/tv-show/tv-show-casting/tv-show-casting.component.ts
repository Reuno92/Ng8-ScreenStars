import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {TvShowHttpService} from '../../../../../services/http/tv-show-http.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {IMAGES_HOST} from '../../../../../../constant/api.constant';

@Component({
  selector: 'app-tv-show-casting',
  templateUrl: './tv-show-casting.component.html',
  styleUrls: ['./tv-show-casting.component.scss']
})
export class TvShowCastingComponent implements OnInit {

  public id: string;
  public error: HttpErrorResponse;
  public imagesLinks: string;

  public loadingComponent: boolean;

  public tvShowCasting$: Observable<any>;
  public loadingCastingTvShow: boolean;


  public constructor(private tvService: TvShowHttpService,
                     private route: ActivatedRoute) {
    this.imagesLinks = IMAGES_HOST;
  }

  public ngOnInit(): void {
    this.getCreditsTVShow();
  }

  public getGender(int): string {
    return (int === 2) ? 'Male' : 'Female';
  }

  private getCreditsTVShow() {
    this.loadingCastingTvShow = true;
    this.getId();
    this.tvService.getCreditTvShow(this.id).subscribe(
      data => this.tvShowCasting$ = data,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingCastingTvShow = false
    );
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
