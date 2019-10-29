import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowRecommendationComponent } from './tv-show-recommendation.component';

describe('TvShowRecommendationComponent', () => {
  let component: TvShowRecommendationComponent;
  let fixture: ComponentFixture<TvShowRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
