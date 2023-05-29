import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "./services/login.service";

@Injectable({
  providedIn: 'root'
})
export class PasswordChangeGuard implements CanActivate {


  isPasswordChanged !: Boolean;

  constructor(private authService : LoginService, private router : Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.isPasswordChanged().subscribe(response =>{
      this.isPasswordChanged = response.data?.isPasswordChanged;
      console.log(this.isPasswordChanged);

      if (this.isPasswordChanged) {
        this.router.navigate(['/navigation']);
      }
    });
    return true;
  }

}
