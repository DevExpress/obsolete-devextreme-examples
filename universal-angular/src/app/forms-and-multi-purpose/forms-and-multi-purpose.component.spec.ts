import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAndMultiPurposeComponent } from '../forms-and-multi-purpose/forms-and-multi-purpose.component';

describe('FormsAndMultiPurposeComponent', () => {
  let component: FormsAndMultiPurposeComponent;
  let fixture: ComponentFixture<FormsAndMultiPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsAndMultiPurposeComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAndMultiPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
