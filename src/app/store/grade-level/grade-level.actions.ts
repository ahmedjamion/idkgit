// store/grade-level/grade-level.actions.ts
import { createAction, props } from '@ngrx/store';
import { GradeLevel } from '../../core/models/grade-level.model';

export const loadGradeLevels = createAction('[GradeLevel] Load Grade Levels');

export const createGradeLevel = createAction(
  '[GradeLevel] Create Grade Level',
  props<{ gradeLevel: Partial<GradeLevel> }>(),
);

export const createGradeLevelsSuccess = createAction(
  '[GradeLevel] Create Grade Levels Success',
  props<{ gradeLevel: GradeLevel }>(),
);

export const createGradeLevelsFailure = createAction(
  '[GradeLevel] Create Grade Levels Failure',
  props<{ error: any }>(),
);

export const loadGradeLevelsSuccess = createAction(
  '[GradeLevel] Load Grade Levels Success',
  props<{ gradeLevels: GradeLevel[] }>(),
);

export const loadGradeLevelsFailure = createAction(
  '[GradeLevel] Load Grade Levels Failure',
  props<{ error: any }>(),
);

export const loadGradeLevel = createAction(
  '[GradeLevel] Load Grade Level',
  props<{ id: number }>(),
);

export const loadGradeLevelSuccess = createAction(
  '[GradeLevel] Load Grade Level Success',
  props<{ gradeLevel: GradeLevel }>(),
);

export const loadGradeLevelFailure = createAction(
  '[GradeLevel] Load Grade Level Failure',
  props<{ error: any }>(),
);

export const updateGradeLevel = createAction(
  '[GradeLevel] Update Grade Level',
  props<{ id: number; gradeLevel: Partial<GradeLevel> }>(),
);

export const updateGradeLevelSuccess = createAction(
  '[GradeLevel] Update Grade Level Success',
  props<{ gradeLevel: GradeLevel }>(),
);

export const updateGradeLevelFailure = createAction(
  '[GradeLevel] Update Grade Level Failure',
  props<{ error: any }>(),
);

export const clearSelectedGradeLevel = createAction(
  '[GradeLevel] Clear Selected Grade Level',
);

export const deleteGradeLevel = createAction(
  '[GradeLevel] Delete Grade Level',
  props<{ id: number }>(),
);

export const deleteGradeLevelSuccess = createAction(
  '[GradeLevel] Delete Grade Level Success',
  props<{ id: number }>(),
);

export const deleteGradeLevelFailure = createAction(
  '[GradeLevel] Delete Grade Level Failure',
  props<{ error: any }>(),
);
