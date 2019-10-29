import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTVShowComponent } from './single-tv-show.component';

describe('SingleTVShowComponent', () => {
  let component: SingleTVShowComponent;
  let fixture: ComponentFixture<SingleTVShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTVShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTVShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
