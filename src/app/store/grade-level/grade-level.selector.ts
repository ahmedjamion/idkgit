import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GradeLevelState } from './grade-level.state';

// Feature key must match the one used in StoreModule.forFeature
export const selectGradeLevelState =
  createFeatureSelector<GradeLevelState>('gradeLevel');

export const selectAllGradeLevels = createSelector(
  selectGradeLevelState,
  (state) => state.gradeLevels,
);

export const selectGradeLevelLoading = createSelector(
  selectGradeLevelState,
  (state) => state.loading,
);

export const selectGradeLevelError = createSelector(
  selectGradeLevelState,
  (state) => state.error,
);

export const selectSelectedGradeLevel = createSelector(
  selectGradeLevelState,
  (state) => state.selectedGradeLevel,
);

export const selectUpdatedGradeLevel = createSelector(
  selectGradeLevelState,
  (state) => state.updatedGradeLevel,
);
