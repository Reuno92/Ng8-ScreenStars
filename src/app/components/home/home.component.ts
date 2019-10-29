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
  public discoverMovie$: Observable<any>;
  public loadingDiscoverMovie: boolean;

  public latestMovies$: Observable<any>;
  public loadingLatestMovie: boolean;

  public popularMovies$: Observable<any>;
  public loadingPopularMovies: boolean;

  public genreMovieList$: Observable<any>;

  // TV SHOWS
  public discoverTV$: Observable<any>;
  public loadingDiscoverTV: boolean;

  public AiringToday$: Observable<any>;
  public OnAir$: Observable<any>;
  public topRated$: Observable<any>;
  public latestTV$: Observable<any>;
  public popularTV$: Observable<any>;

  public error;

  constructor(
    private discoverService: DiscoverHttpService,
    private movieService: MoviesHttpService,
    private genreMovieService: GenreHttpService) {
      this.loadingDiscoverMovie = false;
      this.loadingLatestMovie = false;
      this.loadingPopularMovies = false;
  }

  public ngOnInit(): void {
    this.getDiscoverMovie();
    this.getDiscoverTV();

    this.getMoviesGenre();
    this.getPopularMovies();
  }

  public ngAfterViewChecked(): void {}

  public ngOnDestroy(): void {}

  private getDiscoverMovie(): void {
    this.discoverService.getDiscoverMovie()
      .subscribe(
        (data) => this.discoverMovie$ = data,
            (err: HttpErrorResponse) => this.error = err,
        () => this.loadingDiscoverMovie = true);
  }

  private getDiscoverTV(): void {
    this.discoverService.getDiscoverTV()
      .subscribe(
        (data) => this.discoverTV$ = data,
        (err: HttpErrorResponse) => this.error = err,
        () => this.loadingDiscoverTV = true);
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
