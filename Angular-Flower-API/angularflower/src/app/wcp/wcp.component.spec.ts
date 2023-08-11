import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcpComponent } from './wcp.component';

describe('WcpComponent', () => {
  let component: WcpComponent;
  let fixture: ComponentFixture<WcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
