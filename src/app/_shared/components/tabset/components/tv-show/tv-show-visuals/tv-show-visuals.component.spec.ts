import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowVisualsComponent } from './tv-show-visuals.component';

describe('TvShowVisualsComponent', () => {
  let component: TvShowVisualsComponent;
  let fixture: ComponentFixture<TvShowVisualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowVisualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowVisualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
