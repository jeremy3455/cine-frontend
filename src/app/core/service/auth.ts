import { Injectable } from '../../../../node_modules/@angular/core/index';
import { Router } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private usuarioValido = {
    username: 'admin',
    password: '1234'
  };

  constructor(private router: Router) { }
  login(username: string, password: string): boolean {
    if (username === this.usuarioValido.username && password === this.usuarioValido.password) {
      localStorage.setItem('token', 'acceso-autorizado');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  estaAutenticado(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
