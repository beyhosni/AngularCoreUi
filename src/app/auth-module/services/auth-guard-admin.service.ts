import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardAdminService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuth && this.authService.isAdmin()) {
        return true;
      } else {
        this.router.navigate(['/dashboard']);
      }
  }
}

