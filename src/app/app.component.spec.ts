import {async, getTestBed, inject, TestBed} from '@angular/core/testing';
import {RouterTestingModule, SpyNgModuleFactoryLoader} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {Router} from "@angular/router";
import {Location, LocationStrategy} from "@angular/common";
import {MockLocationStrategy, SpyLocation} from "@angular/common/testing";
import {NgModuleFactory} from "@angular/core";

describe('AppComponent', () => {

  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '', component: HomeComponent
          }
        ])
      ],
      declarations: [
        AppComponent, HomeComponent
      ],
      providers: [
        {
          provide: Location, useClass: SpyLocation
        },
        {
          provide: LocationStrategy, useClass: MockLocationStrategy
        },
        {
          provide: NgModuleFactory, useClass: SpyNgModuleFactoryLoader
        }
      ]
    }).compileComponents();
    let injector = getTestBed();
    location = injector.get(Location);
    router = injector.get(Router);
  }));

  beforeEach(
    inject(
      [Router, Location],
      (_router: Router, _location: Location) => {
        router = _router;
        location = _location;
      }
    )
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MovieStar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MovieStar');
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to MovieStar!');
  });

  it('should go home', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router.navigate([''])
      .then(() => {
        expect(location.path()).toBe('/');
      })
  });
});

