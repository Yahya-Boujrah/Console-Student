import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject, tap} from "rxjs";
import {User} from "../interfaces/User.interface";
import {AuthResponse} from "../interfaces/Auth-response";
import { CustomResponse } from '../interfaces/Custom-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  user!: User;
  private user$ = new BehaviorSubject<any>(null);
  CurrentUser$ = this.user$.asObservable();


  private readonly URL : string = 'http://localhost:8080/api/auth';

  constructor(private http : HttpClient) { }

  authenticate(email : string, password : string){
    return this.http.post<AuthResponse>(`${this.URL}/authenticate`, { email : email, password : password})
      .pipe(tap(response =>{
        this.user  = response.user;
        this.user$.next(this.user);
      }));
  }

  getPassword(cne : string, dateNaissance : Date){
    return this.http.post<CustomResponse>(`${this.URL}/getpassword`, {cne : cne, dateNaissance : dateNaissance})
      .pipe(
        tap(
        console.log));
  }

  changePassword(password: string){
    return this.http.put<CustomResponse>('http://localhost:8080/user/changepassword', {password : password})
      .pipe(
        tap(response => {
           this.user.isPasswordChanged = true;
           this.user$.next(this.user);
          console.log()
        }
       ));

  }


  isPasswordChanged(){
    return this.http.get<CustomResponse>(`${this.URL}/isPasswordChanged`).pipe(
      tap(console.log)
    );
  }
}
