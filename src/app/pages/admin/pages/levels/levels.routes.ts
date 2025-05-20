import { Routes } from '@angular/router';

export const levelRoutes: Routes = [
  { path: '', redirectTo: 'all-levels', pathMatch: 'full' },

  {
    path: 'create-level',
    loadComponent: () =>
      import('./create-level/create-level.component').then(
        (component) => component.CreateLevelComponent,
      ),
  },
  {
    path: 'all-levels',
    loadComponent: () =>
      import('./all-levels/all-levels.component').then(
        (component) => component.AllLevelsComponent,
      ),
  },
  {
    path: 'edit-level/:id',
    loadComponent: () =>
      import('./edit-level/edit-level.component').then(
        (component) => component.EditLevelComponent,
      ),
  },
];
