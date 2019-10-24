import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderComponent } from './layout-header.component';
import {LayoutFooterComponent} from "../layout-footer/layout-footer.component";
import {DebugElement} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {AppComponent} from "../../../app.component";
import {HomeComponent} from "../../../components/home/home.component";
import {LayoutTemplateComponent} from "../layout-template.component";
import {NotFoundComponent} from "../../../components/not-found/not-found.component";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "../../../app-routing.module";

describe('LayoutHeaderComponent', () => {
  let fixture: ComponentFixture<LayoutHeaderComponent>;

  let debugElement: DebugElement;
  let app: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        LayoutTemplateComponent,
        LayoutHeaderComponent,
        LayoutFooterComponent,
        NotFoundComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutFooterComponent);
    debugElement = fixture.debugElement;
    app = debugElement.componentInstance;
  }));

  it('should create', () => {
    expect(app).toBeTruthy();
  });
});
