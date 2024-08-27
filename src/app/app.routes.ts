import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', loadComponent:()=> import('./features/note.component').then(c=>c.NoteComponent)}
];
