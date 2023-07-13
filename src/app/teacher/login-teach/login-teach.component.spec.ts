import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTeachComponent } from './login-teach.component';

describe('LoginTeachComponent', () => {
  let component: LoginTeachComponent;
  let fixture: ComponentFixture<LoginTeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTeachComponent]
    });
    fixture = TestBed.createComponent(LoginTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
