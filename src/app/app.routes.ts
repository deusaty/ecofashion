import { Routes } from '@angular/router';
import { Infografia } from './components/infografia/infografia';

export const routes: Routes = [
  { path: '', component: Infografia }, // Esta es la página que sale al entrar
  { 
    path: 'comparar', 
    // Esto es Lazy Loading: solo carga el comparador cuando vas a esa ruta
    loadComponent: () => import('./components/comparator/comparator').then(m => m.ComparatorComponent) 
  },
  { path: '**', redirectTo: '' } // Si el usuario escribe cualquier otra cosa, lo regresa al inicio
];