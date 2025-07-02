import { Component } from '@angular/core';
import { AuthService } from '../service/auth';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})

export class LayoutComponent {
  constructor(private authService: AuthService) {}

  
  logout() {
    this.authService.logout();
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
