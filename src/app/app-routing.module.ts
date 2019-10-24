import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Template Component
import {LayoutTemplateComponent} from "./template/layout-template/layout-template.component";

// Route Component
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AppComponent} from "./app.component";


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
            component: HomeComponent
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
