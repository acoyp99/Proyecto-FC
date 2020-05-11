import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNluComponent } from './text-nlu.component';

describe('TextNluComponent', () => {
  let component: TextNluComponent;
  let fixture: ComponentFixture<TextNluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextNluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextNluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
