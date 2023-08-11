import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowdetlComponent } from './flowdetl.component';

describe('FlowdetlComponent', () => {
  let component: FlowdetlComponent;
  let fixture: ComponentFixture<FlowdetlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowdetlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowdetlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
