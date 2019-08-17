import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondclearanceComponent } from './secondclearance.component';

describe('SecondclearanceComponent', () => {
  let component: SecondclearanceComponent;
  let fixture: ComponentFixture<SecondclearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondclearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondclearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
