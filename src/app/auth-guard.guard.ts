import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  passwordChanged!:Boolean;

  constructor(private router : Router, private loginService : LoginService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(state.url == ""){ return true;}

    let token = sessionStorage.getItem('token');

    if(!token){
      return this.router.parseUrl('');
    }
    
    // console.log('outside')
    // console.log(this.passwordChanged)
    // if(this.passwordChanged === false){
    //   console.log('inside if')
    //   return this.router.navigate(['change-pwd']);
    // }
    return true;
  }


}
