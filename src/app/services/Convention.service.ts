import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http"

import { Observable, catchError, of, tap } from "rxjs";
import { CustomResponse } from "../interfaces/Custom-response";
import { Convention } from "../interfaces/Convention.interface";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class ConventionService {
  private readonly apiUrl = 'https://gestion-ecole.herokuapp.com';  

  constructor(private http: HttpClient) {}

  conventions$ = <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/conventions/list`)
    .pipe(
      tap(console.log),
      catchError(() => {
        return of('error')
      })
    );

  saveConvention$ = (convention:Convention) => <Observable<CustomResponse>>
  this.http.post<CustomResponse>(`${this.apiUrl}/conventions/save` , convention, httpOptions)
  .pipe(
    tap(console.log),
    catchError(() => {
      return of('error')
    })
  );

  updateConvention$ = (convention:Convention) => <Observable<CustomResponse>>
  this.http.put<CustomResponse>(`${this.apiUrl}/conventions/update` , convention, httpOptions)
  .pipe(
    tap(console.log),
    catchError(() => {
      return of('error')
    })
  );
  convention$ =  (conventionId: number) => <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/conventions/get/${conventionId}`)
  .pipe(
    tap(console.log),
    catchError(() => {
      return of('error')
    })
  );

  deleteConvention$ = (conventionId: number) => <Observable<CustomResponse>>
  this.http.delete<CustomResponse>(`${this.apiUrl}/conventions/delete/${conventionId}`)
  .pipe(
    tap(console.log),
    catchError(() => {
      return of('error')
    })
  );
}
