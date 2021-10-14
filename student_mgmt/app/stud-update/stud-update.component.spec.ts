import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudUpdateComponent } from './stud-update.component';

describe('StudUpdateComponent', () => {
  let component: StudUpdateComponent;
  let fixture: ComponentFixture<StudUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
