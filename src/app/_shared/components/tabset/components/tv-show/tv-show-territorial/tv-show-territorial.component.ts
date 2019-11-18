import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {TvShowHttpService} from '../../../../../services/http/tv-show-http.service';
import {Observable, forkJoin, Subscription, of, concat} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Translation} from '../../../../../models/TV/Translation';
import {Rating} from '../../../../../models/TV/Rating';
import {catchError, concatMap, filter, map, switchMap} from 'rxjs/operators';
import {Territorial} from '../../../../../models/TV/Territorial';

@Component({
  selector: 'app-tv-show-territorial',
  templateUrl: './tv-show-territorial.component.html',
  styleUrls: ['./tv-show-territorial.component.scss']
})
export class TvShowTerritorialComponent implements OnInit, OnDestroy {

  private id: number;
  private error: HttpErrorResponse;
  private loadingComponent: Boolean;

  contentRating$: Observable<Rating>;
  translations$: Observable<Translation>;
  results$: Territorial;

  territorial$: Subscription;


  constructor(
    private tvShowHttpService: TvShowHttpService,
    private route: ActivatedRoute
  ) {
    this.loadingComponent = false;
  }

  ngOnInit(): void {
    this.getTerritorial();
  }

  ngOnDestroy(): void {
    this.territorial$.unsubscribe();
  }

  getTerritorial() {
    this.getId();
    this.contentRating$ = this.tvShowHttpService.getContentTVShow(this.id);
    this.translations$ = this.tvShowHttpService.getTranslationsTVShow(this.id);

    this.contentRating$.subscribe(data => console.log('content rating', data));
    this.translations$.subscribe(data => console.log('translation', data));

    this.territorial$ = forkJoin([this.contentRating$, this.translations$]).pipe(
      catchError( val => of(val))
    ).subscribe(
      (data) => this.results$ = data,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingComponent = false
    )
  }

  private getId(): void {
    this.route.parent.params.subscribe(
      data => this.id = data.id,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingComponent = false
    );
  }
}
