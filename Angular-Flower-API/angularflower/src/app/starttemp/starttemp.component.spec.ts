import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttempComponent } from './starttemp.component';

describe('StarttempComponent', () => {
  let component: StarttempComponent;
  let fixture: ComponentFixture<StarttempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarttempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
