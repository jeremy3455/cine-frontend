import { CanActivateFn, Router } from '@angular/router';
import { Injectable } from '../../../../node_modules/@angular/core/index';
import { AuthService } from '../service/auth';
import { CanActivate } from '../../../../node_modules/@angular/router/router_module.d';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.AuthService.estaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}