import { Routes } from '@angular/router';
import { Infografia } from './components/infografia/infografia';

export const routes: Routes = [
  { path: '', component: Infografia }, 
  { 
    path: 'comparar', 

    loadComponent: () => import('./components/comparator/comparator').then(m => m.ComparatorComponent) 
  },
  { path: '**', redirectTo: '' } 
];