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
            children: [
              {
                path: ':id/view',
                component: SingleMovieComponent
              }
            ]
          },
          {
            path: 'tv-show',
            component: TVShowsComponent,
            children: [
              {
                path: ':id/view',
                component: SingleTVShowComponent
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
