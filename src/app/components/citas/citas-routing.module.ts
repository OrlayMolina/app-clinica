import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crear-cita',
    loadComponent: () => import('../crear-cita/crear-cita.component').then(m => m.CrearCitaComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
