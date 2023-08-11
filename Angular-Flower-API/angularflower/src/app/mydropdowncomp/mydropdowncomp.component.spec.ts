import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydropdowncompComponent } from './mydropdowncomp.component';

describe('MydropdowncompComponent', () => {
  let component: MydropdowncompComponent;
  let fixture: ComponentFixture<MydropdowncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydropdowncompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydropdowncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
