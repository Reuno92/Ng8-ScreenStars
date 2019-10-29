import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DiscoverHttpService} from '../../_shared/services/http/discover-http.service';
import {MoviesHttpService} from '../../_shared/services/http/movies-http.service';
import {GenreHttpService} from '../../_shared/services/http/genre-http.service';
import {HttpErrorResponse} from '@angular/common/http';
import { IMAGES_HOST } from '../../constant/api.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewChecked {

  // MOVIES
  public discover$: Observable<any>;
  public loadingDiscover: boolean;

  public latestMovies$: Observable<any>;
  public loadingLatestMovie: boolean;

  public popularMovies$: Observable<any>;
  public loadingPopularMovies: boolean;

  public genreMovieList$: Observable<any>;

  // TV SHOWS
  public AiringToday$: Observable<any>;
  public OnAir$: Observable<any>;
  public topRated$: Observable<any>;
  public latestTV$: Observable<any>;
  public popularTV$: Observable<any>;

  public imageLinks: string;
  public error;

  constructor(
    private discoverService: DiscoverHttpService,
    private movieService: MoviesHttpService,
    private genreMovieService: GenreHttpService) {
      this.loadingDiscover = false;
      this.loadingLatestMovie = false;
      this.loadingPopularMovies = false;
      this.imageLinks = IMAGES_HOST;
  }

  public ngOnInit(): void {
    this.getDiscover();
    this.getMoviesGenre();
    this.getPopularMovies();
  }

  public ngAfterViewChecked(): void {}

  public ngOnDestroy(): void {}

  private getDiscover(): void {
    this.discoverService.getDiscover()
      .subscribe(
        (data) => this.discover$ = data,
            (err: HttpErrorResponse) => this.error = err,
        () => this.loadingDiscover = true);
  }

  private getLatestMovies(): void {
    this.movieService.getLatestMovies()
      .subscribe(
        (data) => this.latestMovies$ = data,
        (err: HttpErrorResponse) => this.error = err,
        () => this.loadingLatestMovie = true
      );
  }

  private getMoviesGenre(): void {
    this.genreMovieService.getGenreMoviesList()
      .subscribe(
        (data) => this.genreMovieList$ = data,
        (err: HttpErrorResponse) => this.error = err
      );
  }

  private getPopularMovies(): void {
    this.movieService.getPopularMovies()
      .subscribe(
        (data) => this.popularMovies$ = data,
        (err: HttpErrorResponse) => this.error = err,
        () => this.loadingPopularMovies = true
      );
  }

  private getPopularTV() {}
}
