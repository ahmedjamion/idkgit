import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { createGradeLevel } from '../../../../../store/grade-level/grade-level.actions';
import { GradeLevel } from '../../../../../core/models/grade-level.model';

@Component({
  selector: 'app-create-level',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-level.component.html',
  styleUrl: './create-level.component.css',
})
export class CreateLevelComponent {
  private store = inject(Store);

  levelForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    level_order: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.levelForm.valid) {
      this.store.dispatch(
        createGradeLevel({
          gradeLevel: {
            name: this.levelForm.value.name!,
            description: this.levelForm.value.description!,
            level_order: this.levelForm.value.level_order!,
          },
        }),
      );
    }
  }
}
