import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFooterComponent } from './layout-footer.component';
import {AppComponent} from "../../../app.component";
import {DebugElement} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "../../../app-routing.module";
import {LayoutTemplateComponent} from "../layout-template.component";
import {HomeComponent} from "../../../components/home/home.component";
import {NotFoundComponent} from "../../../components/not-found/not-found.component";
import {LayoutHeaderComponent} from "../layout-header/layout-header.component";

describe('LayoutFooterComponent', () => {
  let fixture: ComponentFixture<LayoutFooterComponent>;

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
