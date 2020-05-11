import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterNluComponent } from './twitter-nlu.component';

describe('TwitterNluComponent', () => {
  let component: TwitterNluComponent;
  let fixture: ComponentFixture<TwitterNluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterNluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterNluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
