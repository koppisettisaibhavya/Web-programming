import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudCreateComponent } from './stud-create.component';

describe('StudCreateComponent', () => {
  let component: StudCreateComponent;
  let fixture: ComponentFixture<StudCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
