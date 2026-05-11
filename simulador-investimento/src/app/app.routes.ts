import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Caminho vazio redireciona para Home
  { path: '**', redirectTo: '' }         // Qualquer rota errada volta para Home
];
