import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly URL : string = 'http://localhost:8080/api/auth/authenticate';

  constructor(private http : HttpClient) { }

  authenticate(email : string, password : string){
    return this.http.post<>(this.URL, { email : email, password : password})
      .pipe(tap(response =>{
        const user = ;
        this.user.next(user);
      }));
  }
}
