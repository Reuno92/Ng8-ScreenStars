import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

// Third party modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {YouTubePlayerModule} from '@angular/youtube-player';

const THIRD_PARTY_MODULES = [
  NgbModule,
  YouTubePlayerModule
];

// App Component
import { LayoutTemplateComponent } from './template/layout-template/layout-template.component';
import { LayoutHeaderComponent } from './template/layout-template/layout-header/layout-header.component';
import { LayoutFooterComponent } from './template/layout-template/layout-footer/layout-footer.component';
const LAYOUT_COMPONENTS = [
  LayoutTemplateComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
];

import { CarouselComponent } from './_shared/components/carousel/carrousel.component';
import { CardColumnsComponent } from './_shared/components/card-columns/card-columns.component';
import { PopularPersonComponent } from './_shared/components/popular-person/popular-person.component';
const APP_SHARED_COMPONENTS = [
  CarouselComponent,
  CardColumnsComponent,
  PopularPersonComponent,
];

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TrendingComponent } from './components/trending/trending.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SingleMovieComponent } from './components/movies/single-movie/single-movie.component';
import { TVShowsComponent } from './components/tv-shows/tv-shows.component';
import { SingleTVShowComponent } from './components/tv-shows/single-tv-show/single-tv-show.component';
import { SinglePersonComponent } from './components/person/single-person/single-person.component';
import { TabsetComponent } from './_shared/components/tabset/tabset.component';
import {TvShowDetailComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-detail/tv-show-detail.component';
import {TvShowCastingComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-casting/tv-show-casting.component';
import {TvShowReviewComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-review/tv-show-review.component';
import {TvShowRecommendationComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-recommendation/tv-show-recommendation.component';
import {TvShowSimilarComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-similar/tv-show-similar.component';
import {TvShowTerritorialComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-territorial/tv-show-territorial.component';
import {TvShowVideosComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-videos/tv-show-videos.component';
import {TvShowVisualsComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-visuals/tv-show-visuals.component';
import {TvShowTabsetService} from './_shared/services/tabset/tv-show-tabset.service';
const APP_COMPONENTS = [
  HomeComponent,
  NotFoundComponent,
  TrendingComponent,
  MoviesComponent,
  SingleMovieComponent,
  TVShowsComponent,
  SingleTVShowComponent,
  TvShowDetailComponent,
  TvShowCastingComponent,
  TvShowReviewComponent,
  TvShowRecommendationComponent,
  TvShowSimilarComponent,
  TvShowTerritorialComponent,
  TvShowVideosComponent,
  TvShowVisualsComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...LAYOUT_COMPONENTS,
    ...APP_COMPONENTS,
    ...APP_SHARED_COMPONENTS,
    SinglePersonComponent,
    TabsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...THIRD_PARTY_MODULES
  ],
  providers: [TvShowTabsetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
