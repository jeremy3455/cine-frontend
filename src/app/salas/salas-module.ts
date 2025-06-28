import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../../node_modules/@angular/router/router_module.d';
import { LayoutComponent } from '../core/layout/layout';
import { SalasFromComponent } from './salas-from/salas-from';
import { SalasListComponent } from './salas-list/salas-list';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: SalasListComponent },
      { path: 'nueva', component: SalasFormComponent },
      { path: 'editar/:id', component: SalasFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalasRoutingModule {}