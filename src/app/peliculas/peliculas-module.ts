import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../../node_modules/@angular/router/router_module.d';
import { PeliculasFromComponent } from './peliculas-from/peliculas-from';
import { PeliculasListComponent } from './peliculas-list/peliculas-list';
import { LayoutComponent } from '../core/layout/layout';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: PeliculasListComponent },
      { path: 'nueva', component: PeliculasFormComponent },
      { path: 'editar/:id', component: PeliculasFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule {}