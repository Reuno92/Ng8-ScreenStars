import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowReviewComponent } from './tv-show-review.component';

describe('TvShowReviewComponent', () => {
  let component: TvShowReviewComponent;
  let fixture: ComponentFixture<TvShowReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
