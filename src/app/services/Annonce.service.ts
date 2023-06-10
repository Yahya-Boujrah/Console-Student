import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http"
import {Annonce} from "../interfaces/Annonce.interface"
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { CustomResponse } from "../interfaces/Custom-response";

@Injectable()
export class AnnonceService{
  private readonly apiUrl = 'https://gestion-ecole.herokuapp.com/annonces/list';  

  constructor(private http: HttpClient) {}

  annonces$ = <Observable<CustomResponse>>
    this.http.get<CustomResponse>(this.apiUrl)
    .pipe(
      tap(console.log),
      catchError(() => {
        return of('error')
      })
  );

}