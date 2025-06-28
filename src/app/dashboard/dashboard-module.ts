import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../../node_modules/@angular/router/router_module.d';
import { OverviewComponent } from './overview/overview';
import { LayoutComponent } from '../core/layout/layout';

const routes: Routes = [
  {
    path:'',
    Component: LayoutComponent,
    children: [
      { path: '', Component: OverviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
