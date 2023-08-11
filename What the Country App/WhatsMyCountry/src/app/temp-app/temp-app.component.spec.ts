import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempAppComponent } from './temp-app.component';

describe('TempAppComponent', () => {
  let component: TempAppComponent;
  let fixture: ComponentFixture<TempAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
