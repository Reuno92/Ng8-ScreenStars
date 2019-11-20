import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Template Component
import {LayoutTemplateComponent} from './template/layout-template/layout-template.component';

// Route Component
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AppComponent} from './app.component';
import {SingleTVShowComponent} from './components/tv-shows/single-tv-show/single-tv-show.component';
import {TVShowsComponent} from './components/tv-shows/tv-shows.component';
import {MoviesComponent} from './components/movies/movies.component';
import {SingleMovieComponent} from './components/movies/single-movie/single-movie.component';
import {TrendingComponent} from './components/trending/trending.component';
import {SinglePersonComponent} from './components/person/single-person/single-person.component';
import {TvShowDetailComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-detail/tv-show-detail.component';
import {TvShowCastingComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-casting/tv-show-casting.component';
import {TvShowReviewComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-review/tv-show-review.component';
import {TvShowRecommendationComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-recommendation/tv-show-recommendation.component';
import {TvShowSimilarComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-similar/tv-show-similar.component';
import {TvShowTerritorialComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-territorial/tv-show-territorial.component';
import {TvShowVideosComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-videos/tv-show-videos.component';
import {TvShowVisualsComponent} from './components/tv-shows/single-tv-show/tabset/tv-show-visuals/tv-show-visuals.component';
import {SingleSeasonComponent} from './components/tv-shows/single-season/single-season.component';
import {SingleEpisodeComponent} from './components/tv-shows/single-episode/single-episode.component';

// TODO Trendings Page

// TODO Movies Page
// TODO Single Movie Page
// TODO Person Page
export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LayoutTemplateComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
            data : {
              title: 'Home'
            }
          },
          {
            path: 'trendings',
            component: TrendingComponent
          },
          {
            path: 'movies',
            component: MoviesComponent,
          },
          {
            path: 'movies/:id/view',
            component: SingleMovieComponent
          },
          {
            path: 'tv-show',
            component: TVShowsComponent,
          },
          {
            path: 'tv-show/:id',
            component: SingleTVShowComponent,
            children: [
              {
                path: '',
                redirectTo: 'detail', pathMatch: 'full'
              },
              {
                path: 'detail',
                component: TvShowDetailComponent
              },
              {
                path: 'casting',
                component: TvShowCastingComponent
              },
              {
                path: 'review',
                component: TvShowReviewComponent,
              },
              {
                path: 'recommendation',
                component: TvShowRecommendationComponent
              },
              {
                path: 'similar',
                component: TvShowSimilarComponent
              },
              {
                path: 'territorial',
                component: TvShowTerritorialComponent
              },
              {
                path: 'videos',
                component: TvShowVideosComponent
              },
              {
                path: 'visuals',
                component: TvShowVisualsComponent
              },
              {
                path: 'season/:seasonNumber',
                component: SingleSeasonComponent,
                children: [
                  {
                    path: 'episode/:episodeNumber',
                    component: SingleEpisodeComponent
                  }
                ]
              }
            ]
          },
          {
            path: 'person/:id/view',
            component: SinglePersonComponent
          }
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
