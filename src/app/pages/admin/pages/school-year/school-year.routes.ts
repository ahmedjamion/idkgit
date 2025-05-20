import { Routes } from '@angular/router';

export const schoolYearRoutes: Routes = [
  { path: '', redirectTo: 'active', pathMatch: 'full' },

  {
    path: 'active',
    loadComponent: () =>
      import('./active/active.component').then(
        (component) => component.ActiveComponent,
      ),
  },
  {
    path: 'all',
    loadComponent: () =>
      import('./all/all.component').then((component) => component.AllComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create-school-year/create-school-year.component').then(
        (component) => component.CreateSchoolYearComponent,
      ),
  },
];
