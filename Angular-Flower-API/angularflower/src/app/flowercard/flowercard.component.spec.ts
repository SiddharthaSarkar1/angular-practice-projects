import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowercardComponent } from './flowercard.component';

describe('FlowercardComponent', () => {
  let component: FlowercardComponent;
  let fixture: ComponentFixture<FlowercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
