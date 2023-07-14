import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTeachComponent } from './signup-teach.component';

describe('SignupTeachComponent', () => {
  let component: SignupTeachComponent;
  let fixture: ComponentFixture<SignupTeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupTeachComponent]
    });
    fixture = TestBed.createComponent(SignupTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
