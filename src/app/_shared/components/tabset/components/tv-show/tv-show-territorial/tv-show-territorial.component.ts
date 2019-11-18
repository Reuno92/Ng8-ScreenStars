import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Translation, Rating, Territorial} from '../../../../../models/TV';
import {TvShowHttpService} from '../../../../../services/http/tv-show-http.service';

@Component({
  selector: 'app-tv-show-territorial',
  templateUrl: './tv-show-territorial.component.html',
  styleUrls: ['./tv-show-territorial.component.scss']
})
export class TvShowTerritorialComponent implements OnInit {

  private id: number;
  private error: HttpErrorResponse;
  private loadingComponent: Boolean;

  public contentRating$: Observable<Rating>;
  public translations$: Observable<Translation>;
  public results: Territorial;

  constructor(
    private tvShowHttpService: TvShowHttpService,
    private route: ActivatedRoute
  ) {
    this.loadingComponent = false;
  }

  ngOnInit(): void {
    this.getTerritorial();
  }

  getTerritorial() {
    this.getId();
    this.contentRating$ = this.tvShowHttpService.getContentTVShow(this.id);
    this.translations$ = this.tvShowHttpService.getTranslationsTVShow(this.id);

    this.contentRating$.subscribe(data => console.log('content rating', data));
    this.translations$.subscribe(data => console.log('translation', data));

    forkJoin([this.contentRating$, this.translations$]).pipe(
      catchError( val => of(val))
    ).subscribe(
      (data) => this.results = { id: data[0].id, ratings: data[0].results, translations: data[1].translations },
      (err: HttpErrorResponse) => this.error = err,
      () => { this.loadingComponent = false }
    )
  }

  /**
   * return rating by iso_3166_1
   * @param iso
   */
  private getRating(iso): string {
    let item = this.results.ratings.find( x => x.iso_3166_1 === iso);
    return (item !== undefined) ? item.rating : 'No'
  }

  private getId(): void {
    this.route.parent.params.subscribe(
      data => this.id = data.id,
      (err: HttpErrorResponse) => this.error = err,
      () => this.loadingComponent = false
    );
  }
}
