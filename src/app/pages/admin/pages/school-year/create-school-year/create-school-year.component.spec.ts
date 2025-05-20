import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchoolYearComponent } from './create-school-year.component';

describe('CreateSchoolYearComponent', () => {
  let component: CreateSchoolYearComponent;
  let fixture: ComponentFixture<CreateSchoolYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSchoolYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSchoolYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
