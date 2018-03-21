import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsAndListsComponent } from './actions-and-lists.component';

describe('ActionsAndListsComponent', () => {
  let component: ActionsAndListsComponent;
  let fixture: ComponentFixture<ActionsAndListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsAndListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsAndListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
