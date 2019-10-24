import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {Router} from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {Location } from "@angular/common";
import {routes} from "./app-routing.module";
import {LayoutTemplateComponent} from "./template/layout-template/layout-template.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {LayoutHeaderComponent} from "./template/layout-template/layout-header/layout-header.component";
import {LayoutFooterComponent} from "./template/layout-template/layout-footer/layout-footer.component";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let app: any;

  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        LayoutTemplateComponent,
        LayoutHeaderComponent,
        LayoutFooterComponent,
        NotFoundComponent
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    app = debugElement.componentInstance;

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MovieStar'`, () => {
    expect(app.title).toEqual('MovieStar');
  });

  it('navigate to "" redirects you to /', fakeAsync(() => {
    router.navigate(['']);
    tick(50);
    expect(location.path()).toBe('/');
  }));

  it('navigate to "tgz" redirects you to not-found', fakeAsync(() => {
    router.navigate(['tgz']);
    tick(50);
    expect(location.path()).toBe('/not-found');
  }));

  it('navigate to "?req=admin" redirects you to not-found', fakeAsync(() => {
    router.navigate(['?req=admin']);
    tick(50);
    expect(location.path()).toBe('/not-found');
  }));
});

