import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowSimilarComponent } from './tv-show-similar.component';

describe('TvShowSimilarComponent', () => {
  let component: TvShowSimilarComponent;
  let fixture: ComponentFixture<TvShowSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
