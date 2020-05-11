import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosNluComponent } from './cos-nlu.component';

describe('CosNluComponent', () => {
  let component: CosNluComponent;
  let fixture: ComponentFixture<CosNluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosNluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosNluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
