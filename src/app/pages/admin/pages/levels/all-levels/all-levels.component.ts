import { Component, effect, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  deleteGradeLevel,
  loadGradeLevels,
} from '../../../../../store/grade-level/grade-level.actions';
import {
  selectAllGradeLevels,
  selectGradeLevelLoading,
} from '../../../../../store/grade-level/grade-level.selector';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-levels',
  imports: [CommonModule, RouterLink],
  templateUrl: './all-levels.component.html',
  styleUrl: './all-levels.component.css',
})
export class AllLevelsComponent {
  private store = inject(Store);

  selectedId = signal(0);

  gradeLevels = this.store.selectSignal(selectAllGradeLevels);
  loading = this.store.selectSignal(selectGradeLevelLoading);

  constructor() {
    this.store.dispatch(loadGradeLevels());
  }

  deleteGradeLevel(id: number) {
    this.selectedId.set(id);
    this.store.dispatch(deleteGradeLevel({ id: id }));
  }
}
