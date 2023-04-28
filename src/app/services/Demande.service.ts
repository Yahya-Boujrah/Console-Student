import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http"
import {Demande} from "../interfaces/Demande.interface"
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class DemandeService {
  private apiUrl = 'http://localhost:5000/Demandes';  

  constructor(private http: HttpClient) {}

  getDemande(): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.apiUrl);
  }

  addDemande(demande:Demande): Observable<Demande>{
    return this.http.post<Demande>(this.apiUrl, demande, httpOptions);
  }
}