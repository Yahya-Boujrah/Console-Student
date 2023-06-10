import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http"
import {Demande} from "../interfaces/Demande.interface"
import { Observable, catchError, of, tap } from "rxjs";
import { CustomResponse } from "../interfaces/Custom-response";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class DemandeService {
  private readonly apiUrl = 'https://gestion-ecole.herokuapp.com';  

  constructor(private http: HttpClient) {}

  demandes$ = <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/demandes/list`)
    .pipe(
      tap(console.log),
      catchError(() => {
        return of('error')
      })
    );

  saveDemande$ = (demande:Demande) => <Observable<CustomResponse>>
  this.http.post<CustomResponse>(`${this.apiUrl}/demandes/save` , demande, httpOptions)
  .pipe(
    tap(console.log),
    catchError(() => {
      return of('error')
    })
  );

  filterDemande$ = (type: string , response : CustomResponse) => <Observable<CustomResponse>>
    new Observable<CustomResponse>(
      subscriber => {
        console.log(response);
        subscriber.next(
          type === 'All' ? {...response, message: `demandes filtered by ${type} type`} :
            {
              ...response,
              message: (response.data.demandes as Demande[]).filter(demande => demande.type === type).length > 0 ?
              `demandes filtered by ${type} type` : `No demandes of ${type} found`,
              data:{ demandes : (response.data.demandes as Demande[]).filter(demande => demande.type === type)}
            }
        );
        subscriber.complete();
      }
    )
  .pipe(
    tap(console.log),
    catchError(() => {
      return of('error')
    })
  );


  demande$ =  (demandeId: number) => <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/demandes/get/${demandeId}`)
  .pipe(
    tap(console.log),
    catchError(() => {
      return of('error')
    })
  );

  deleteDemande$ = (demandeId: number) => <Observable<CustomResponse>>
  this.http.delete<CustomResponse>(`${this.apiUrl}/demandes/delete/${demandeId}`)
  .pipe(
    tap(console.log),
    catchError(() => {
      return of('error')
    })
  );
}
