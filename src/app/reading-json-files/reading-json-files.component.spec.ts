import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingJsonFilesComponent } from './reading-json-files.component';

describe('ReadingJsonFilesComponent', () => {
  let component: ReadingJsonFilesComponent;
  let fixture: ComponentFixture<ReadingJsonFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingJsonFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingJsonFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
