import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowTerritorialComponent } from './tv-show-territorial.component';

describe('TvShowTerritorialComponent', () => {
  let component: TvShowTerritorialComponent;
  let fixture: ComponentFixture<TvShowTerritorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowTerritorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowTerritorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
