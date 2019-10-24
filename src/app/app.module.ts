import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutTemplateComponent } from './template/layout-template/layout-template.component';
import { LayoutHeaderComponent } from './template/layout-header/layout-header.component';
import { LayoutMainComponent } from './template/layout-main/layout-main.component';
import { LayoutFooterComponent } from './template/layout-footer/layout-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutTemplateComponent,
    LayoutHeaderComponent,
    LayoutMainComponent,
    LayoutFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
