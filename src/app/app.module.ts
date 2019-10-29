import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

// Third party modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const THIRD_PARTY_MODULES = [
  NgbModule,
];

// App Component
import { LayoutTemplateComponent } from './template/layout-template/layout-template.component';
import { LayoutHeaderComponent } from './template/layout-template/layout-header/layout-header.component';
import { LayoutFooterComponent } from './template/layout-template/layout-footer/layout-footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarouselComponent } from './_shared/components/carousel/carrousel.component';
import { CardColumnsComponent } from './_shared/components/card-columns/card-columns.component';

const LAYOUT_COMPONENTS = [
  LayoutTemplateComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
];

const APP_COMPONENTS = [
  HomeComponent,
  NotFoundComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...LAYOUT_COMPONENTS,
    ...APP_COMPONENTS,
    CarouselComponent,
    CardColumnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...THIRD_PARTY_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
