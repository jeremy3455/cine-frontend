import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core/discovery.d';
import { LoginComponent } from './auth/login/login';
import { AuthGuard } from './core/guards/auth-guard';
import { Component } from '@angular/core';


const routes: Routes = [
    { path: 'login', Component: LoginComponent},
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'peliculas', loadChildren: () => import('./peliculas/peliculas.module').then(m => m.PeliculasModule), canActivate: [AuthGuard] },
  { path: 'salas', loadChildren: () => import('./salas/salas.module').then(m => m.SalasModule), canActivate: [AuthGuard] },
  { path: 'asignacion', loadChildren: () => import('./asignacion/asignacion.module').then(m => m.AsignacionModule), canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '**', redirectTo: '/login'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
