import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../../node_modules/@angular/router/router_module.d';
import { AsignarPeliculaComponent } from './asignar-pelicula/asignar-pelicula';
import { LayoutComponent } from '../core/layout/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: AsignarPeliculaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacionRoutingModule {} 