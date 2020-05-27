import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let result = false;
    const grpName = this._authService.getUserGroupA().subscribe(grp => {

      if (grp) {
        this._authService.setUserGroup(grp.groupName);
        result = true;
      }

    });

    return result;
  }
}
