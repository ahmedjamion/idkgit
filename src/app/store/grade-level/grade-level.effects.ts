// store/grade-level/grade-level.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GradeLevelActions from './grade-level.actions';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GradeLevel } from '../../core/models/grade-level.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class GradeLevelEffects {
  private apiUrl = environment.apiUrl;

  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  createGradeLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GradeLevelActions.createGradeLevel),
      mergeMap(({ gradeLevel }) =>
        this.http
          .post<GradeLevel>(`${this.apiUrl}/grade-levels`, gradeLevel)
          .pipe(
            map((gradeLevel) =>
              GradeLevelActions.createGradeLevelsSuccess({
                gradeLevel: gradeLevel,
              }),
            ),
            catchError((error) =>
              of(GradeLevelActions.createGradeLevelsFailure({ error })),
            ),
          ),
      ),
    ),
  );

  loadGradeLevels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GradeLevelActions.loadGradeLevels),
      mergeMap(() =>
        this.http.get<GradeLevel[]>(`${this.apiUrl}/grade-levels`).pipe(
          map((gradeLevels) =>
            GradeLevelActions.loadGradeLevelsSuccess({
              gradeLevels: gradeLevels,
            }),
          ),
          catchError((error) =>
            of(GradeLevelActions.loadGradeLevelsFailure({ error })),
          ),
        ),
      ),
    ),
  );

  loadGradeLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GradeLevelActions.loadGradeLevel),
      mergeMap(({ id }) =>
        this.http.get<GradeLevel>(`${this.apiUrl}/grade-levels/${id}`).pipe(
          map((gradeLevel) =>
            GradeLevelActions.loadGradeLevelSuccess({ gradeLevel }),
          ),
          catchError((error) =>
            of(GradeLevelActions.loadGradeLevelFailure({ error })),
          ),
        ),
      ),
    ),
  );

  updateGradeLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GradeLevelActions.updateGradeLevel),
      mergeMap(({ id, gradeLevel }) =>
        this.http
          .put<GradeLevel>(`${this.apiUrl}/grade-levels/${id}`, gradeLevel)
          .pipe(
            map((gradeLevel) =>
              GradeLevelActions.updateGradeLevelSuccess({ gradeLevel }),
            ),
            catchError((error) =>
              of(GradeLevelActions.updateGradeLevelFailure({ error })),
            ),
          ),
      ),
    ),
  );

  deleteGradeLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GradeLevelActions.deleteGradeLevel),
      mergeMap(({ id }) =>
        this.http.delete<number>(`${this.apiUrl}/grade-levels/${id}`).pipe(
          switchMap((id) => [
            GradeLevelActions.deleteGradeLevelSuccess({ id }),
            GradeLevelActions.loadGradeLevels(),
          ]),
          catchError((error) =>
            of(GradeLevelActions.updateGradeLevelFailure({ error })),
          ),
        ),
      ),
    ),
  );
}
