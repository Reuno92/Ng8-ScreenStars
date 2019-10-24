import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTemplateComponent } from './layout-template.component';
import {DebugElement} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {HomeComponent} from "../../components/home/home.component";
import {LayoutHeaderComponent} from "./layout-header/layout-header.component";
import {LayoutFooterComponent} from "./layout-footer/layout-footer.component";
import {NotFoundComponent} from "../../components/not-found/not-found.component";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "../../app-routing.module";

describe('LayoutTemplateComponent', () => {
  let fixture: ComponentFixture<LayoutTemplateComponent>;

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
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTemplateComponent);
    debugElement = fixture.debugElement;
    app = debugElement.componentInstance;
  }));

  it('should create', () => {
    expect(app).toBeTruthy();
  });
});
