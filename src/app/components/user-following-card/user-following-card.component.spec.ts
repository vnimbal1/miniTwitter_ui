import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowingCardComponent } from './user-following-card.component';

describe('UserFollowingCardComponent', () => {
  let component: UserFollowingCardComponent;
  let fixture: ComponentFixture<UserFollowingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
