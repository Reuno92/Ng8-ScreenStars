import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DiscoverHttpService} from "../../_shared/services/discover-http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // MOVIES
  public discover$: Observable<any>;
  public loadingDiscover: Boolean;
  public latestMovies$: Observable<any>;
  public popularMovies$: Observable<any>;

  // TV SHOWS
  public AiringToday$: Observable<any>;
  public OnAir$: Observable<any>;
  public topRated$: Observable<any>;
  public latestTV$: Observable<any>;
  public popularTV$: Observable<any>;

  public error;

  constructor(private discoverService: DiscoverHttpService) {
    this.loadingDiscover = false;
  }

  ngOnInit() {
    this.getDiscover();
  }

  private getDiscover() {
    this.discoverService.getDiscover()
      .subscribe(
        (data) => { this.discover$ = data; tap(data); },
            (err: HttpErrorResponse) => this.error = err,
        () => this.loadingDiscover = true)
  }

  private getLatestMovies() {}

  private getPopularMovies() {}

  private getLatestTV() {}

  private getPopularTV() {}
}
