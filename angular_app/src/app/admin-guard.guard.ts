import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate {
//   canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     return localStorage.getItem("admin") ? true : false;
//   }
// }
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isLoggedIn();

  }
}
