import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApilireComponent } from './apilire.component';

describe('ApilireComponent', () => {
  let component: ApilireComponent;
  let fixture: ComponentFixture<ApilireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApilireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApilireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
