import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreactiveformComponent } from './myreactiveform.component';

describe('MyreactiveformComponent', () => {
  let component: MyreactiveformComponent;
  let fixture: ComponentFixture<MyreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyreactiveformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
