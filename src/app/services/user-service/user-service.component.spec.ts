import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from './user-service.component';

describe('UserService', () => {
  let component: UserService;
  let fixture: ComponentFixture<UserService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
