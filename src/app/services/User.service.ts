import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subject, tap } from "rxjs";
import { User } from "../interfaces/User.interface";
import { CustomResponse } from '../interfaces/Custom-response';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user!: User;

    private readonly URL: string = 'https://gestion-ecole.herokuapp.com/user';

    constructor(private http: HttpClient) { }

    changePassword(password: string) {
        return this.http.put<CustomResponse>(`${this.URL}/changepassword`, { password: password })
            .pipe(
                tap(response => {
                    console.log()
                }
                ));
    }

    getInfo() {
        return this.http.get<CustomResponse>(`${this.URL}/getInfos`)
            .pipe(
                tap(response => {
                    console.log()
                }
                )
            );
    }


}
