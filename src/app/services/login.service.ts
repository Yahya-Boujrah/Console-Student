import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject, tap} from "rxjs";
import {User} from "../interfaces/User.interface";
import {AuthResponse} from "../interfaces/Auth-response";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  user = new Subject<User>();
  private user$ = new BehaviorSubject<any>(null);
  CurrentUser$ = this.user$.asObservable();


  private readonly URL : string = 'http://localhost:8080/api/auth/authenticate';

  constructor(private http : HttpClient) { }

  authenticate(email : string, password : string){
    return this.http.post<AuthResponse>(this.URL, { email : email, password : password})
      .pipe(tap(response =>{
        const user : User = response.user;
        this.user$.next(user);
      }));
  }
}
