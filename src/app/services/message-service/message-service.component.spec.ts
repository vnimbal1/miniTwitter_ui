import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageService } from './message-service.component';

describe('MessageService', () => {
  let component: MessageService;
  let fixture: ComponentFixture<MessageService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
