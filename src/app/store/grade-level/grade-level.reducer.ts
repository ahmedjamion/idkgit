import { createReducer, on } from '@ngrx/store';
import * as GradeLevelActions from './grade-level.actions';
import { initialGradeLevelState } from './grade-level.state';

export const gradeLevelReducer = createReducer(
  initialGradeLevelState,

  on(GradeLevelActions.createGradeLevel, (state) => ({
    ...state,
    loading: true,
  })),
  on(GradeLevelActions.createGradeLevelsSuccess, (state, { gradeLevel }) => ({
    ...state,
    createdGradeLevel: gradeLevel,
    loading: false,
  })),
  on(GradeLevelActions.createGradeLevelsFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),

  on(GradeLevelActions.loadGradeLevels, (state) => ({
    ...state,
    loading: true,
  })),
  on(GradeLevelActions.loadGradeLevelsSuccess, (state, { gradeLevels }) => ({
    ...state,
    gradeLevels: gradeLevels,
    loading: false,
  })),
  on(GradeLevelActions.loadGradeLevelsFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),

  on(GradeLevelActions.loadGradeLevel, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(GradeLevelActions.loadGradeLevelSuccess, (state, { gradeLevel }) => ({
    ...state,
    selectedGradeLevel: gradeLevel,
    loading: false,
  })),

  on(GradeLevelActions.loadGradeLevelFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(GradeLevelActions.updateGradeLevel, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(GradeLevelActions.updateGradeLevelSuccess, (state, { gradeLevel }) => ({
    ...state,
    selectedGradeLevel: gradeLevel,
    updatedGradeLevel: gradeLevel,
    loading: false,
  })),

  on(GradeLevelActions.updateGradeLevelFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(GradeLevelActions.clearSelectedGradeLevel, (state) => ({
    ...state,
    selectedGradeLevel: null,
  })),

  on(GradeLevelActions.deleteGradeLevel, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(GradeLevelActions.deleteGradeLevelSuccess, (state) => ({
    ...state,
    loading: false,
  })),

  on(GradeLevelActions.updateGradeLevelFailure, (state, error) => ({
    ...state,
    error,
    loading: false,
  })),
);
