import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadapiComponent } from './readapi.component';

describe('ReadapiComponent', () => {
  let component: ReadapiComponent;
  let fixture: ComponentFixture<ReadapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
