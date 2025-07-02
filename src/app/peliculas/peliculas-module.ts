import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasListComponent } from './peliculas-list/peliculas-list.component';
import { PeliculasFormComponent } from './peliculas-form/peliculas-form.component';

const routes: Routes = [
  { path: '', component: PeliculasListComponent },
  { path: 'nueva', component: PeliculasFormComponent },
  { path: 'editar/:id', component: PeliculasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule {}
