import { Component, effect, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  clearSelectedGradeLevel,
  loadGradeLevel,
  updateGradeLevel,
} from '../../../../../store/grade-level/grade-level.actions';
import {
  selectGradeLevelLoading,
  selectSelectedGradeLevel,
} from '../../../../../store/grade-level/grade-level.selector';
import { CommonModule } from '@angular/common';
import { GradeLevel } from '../../../../../core/models/grade-level.model';

@Component({
  selector: 'app-edit-level',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-level.component.html',
  styleUrl: './edit-level.component.css',
})
export class EditLevelComponent {
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  selectedGradeLevel = this.store.selectSignal(selectSelectedGradeLevel);
  loading = this.store.selectSignal(selectGradeLevelLoading);

  editLevelForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    level_order: new FormControl('', [Validators.required]),
  });

  constructor() {
    this.store.dispatch(clearSelectedGradeLevel());
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(loadGradeLevel({ id }));

    // Effect reacts whenever selectedGradeLevel signal changes
    effect(() => {
      const gradeLevel = this.selectedGradeLevel();
      if (gradeLevel) {
        this.editLevelForm.patchValue({
          name: gradeLevel.name,
          description: gradeLevel.description,
          level_order: gradeLevel.level_order,
        });
      }
    });
  }

  onSubmit() {
    if (this.editLevelForm.valid) {
      const gradeLevel = this.selectedGradeLevel();
      if (!gradeLevel) return; // safety check

      this.store.dispatch(
        updateGradeLevel({
          id: gradeLevel.id,
          gradeLevel: {
            name: this.editLevelForm.value.name!,
            description: this.editLevelForm.value.description!,
            level_order: this.editLevelForm.value.level_order!,
          },
        }),
      );
    }
  }
}
