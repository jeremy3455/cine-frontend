import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html'
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    const valido = this.authService.login(this.username, this.password);
    if (valido) {
      this.router.navigate(['/dashboard']);
    }else {
      this.error = true;
    }
    }
  }

