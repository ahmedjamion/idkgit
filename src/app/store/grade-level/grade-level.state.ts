import { GradeLevel } from '../../core/models/grade-level.model';

export interface GradeLevelState {
  gradeLevels: GradeLevel[];
  createdGradeLevel: GradeLevel | null;
  selectedGradeLevel: GradeLevel | null;
  updatedGradeLevel: GradeLevel | null;
  loading: boolean;
  error: any;
}

export const initialGradeLevelState: GradeLevelState = {
  gradeLevels: [],
  createdGradeLevel: null,
  selectedGradeLevel: null,
  updatedGradeLevel: null,
  loading: false,
  error: null,
};
