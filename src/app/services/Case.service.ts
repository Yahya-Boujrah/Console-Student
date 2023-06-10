import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, of } from "rxjs";
import { CustomResponse } from "../interfaces/Custom-response";
import { Case } from "../interfaces/Case.interface";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
@Injectable()
export class CaseService {

private readonly apiUrl = 'https://gestion-ecole.herokuapp.com';  

constructor(private http: HttpClient) {}

  save$ = (caseToAdd: Case) => <Observable<CustomResponse>>
      this.http.post<CustomResponse>(`${this.apiUrl}/requests/save` , caseToAdd, httpOptions)
      .pipe(
          tap(console.log),
          catchError(() => {
              return of('error')
          })
      );

}