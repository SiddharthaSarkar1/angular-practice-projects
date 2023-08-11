import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetapidatacompComponent } from './getapidatacomp.component';

describe('GetapidatacompComponent', () => {
  let component: GetapidatacompComponent;
  let fixture: ComponentFixture<GetapidatacompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetapidatacompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetapidatacompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
