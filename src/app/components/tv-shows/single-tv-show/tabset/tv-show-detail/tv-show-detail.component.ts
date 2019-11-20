import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {TvShowHttpService} from '../../../../../_shared/services/http/tv-show-http.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IMAGES_HOST_SECURE} from '../../../../../constant/api.constant';
import {TV} from '../../../../../_shared/models/TV';
import * as Countries from '../../../../../json/country-codes.json';
import * as Lang from '../../../../../json/language-codes.json';

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

  public imagesLinks = IMAGES_HOST_SECURE;
  public loadingComponent: boolean;

  public missingPlaceholder: string;

  /**
   *  If don't assign (Alias as any).default
   *  it's return undefined…
   */
  public countries: any;
  public languages: any;

  constructor(private route: ActivatedRoute,
              private tvService: TvShowHttpService) {
    this.loadingTvShow = true;
    this.missingPlaceholder = 'assets/missing/logo-missing_en_secondary.svg';
    this.countries = (Countries as any).default;
    this.languages = (Lang as any).default;
  }

  public ngOnInit(): void {
    this.getTVShow();
  }

  private getTVShow() {
    this.loadingTvShow = true;
    this.getId();
    this.tvShow$ = this.tvService.getTVShow(this.id);
    // this.tvShow$.subscribe( x => console.log('length of genres', x.origin_country.length));
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
