import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsAndNotificationsComponent } from './dialogs-and-notifications.component';

describe('DialogsAndNotificationsComponent', () => {
  let component: DialogsAndNotificationsComponent;
  let fixture: ComponentFixture<DialogsAndNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsAndNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsAndNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
