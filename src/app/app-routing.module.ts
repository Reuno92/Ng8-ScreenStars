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
import {TvShowDetailComponent} from './_shared/components/tabset/components/tv-show/tv-show-detail/tv-show-detail.component';
import {TvShowCastingComponent} from './_shared/components/tabset/components/tv-show/tv-show-casting/tv-show-casting.component';
import {TvShowReviewComponent} from './_shared/components/tabset/components/tv-show/tv-show-review/tv-show-review.component';
import {TvShowRecommendationComponent} from './_shared/components/tabset/components/tv-show/tv-show-recommendation/tv-show-recommendation.component';
import {TvShowSimilarComponent} from './_shared/components/tabset/components/tv-show/tv-show-similar/tv-show-similar.component';
import {TvShowTerritorialComponent} from './_shared/components/tabset/components/tv-show/tv-show-territorial/tv-show-territorial.component';
import {TvShowVideosComponent} from './_shared/components/tabset/components/tv-show/tv-show-videos/tv-show-videos.component';
import {TvShowVisualsComponent} from './_shared/components/tabset/components/tv-show/tv-show-visuals/tv-show-visuals.component';

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
