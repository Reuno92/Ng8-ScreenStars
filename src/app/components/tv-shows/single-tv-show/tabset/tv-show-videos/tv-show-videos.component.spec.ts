import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowVideosComponent } from './tv-show-videos.component';

describe('TvShowVideosComponent', () => {
  let component: TvShowVideosComponent;
  let fixture: ComponentFixture<TvShowVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
