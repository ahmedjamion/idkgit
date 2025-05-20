import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLevelsComponent } from './all-levels.component';

describe('AllLevelsComponent', () => {
  let component: AllLevelsComponent;
  let fixture: ComponentFixture<AllLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLevelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
