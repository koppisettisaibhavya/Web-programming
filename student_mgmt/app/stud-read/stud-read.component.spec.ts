import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudReadComponent } from './stud-read.component';

describe('StudReadComponent', () => {
  let component: StudReadComponent;
  let fixture: ComponentFixture<StudReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
