import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowCastingComponent } from './tv-show-casting.component';

describe('TvShowCastingComponent', () => {
  let component: TvShowCastingComponent;
  let fixture: ComponentFixture<TvShowCastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowCastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowCastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
