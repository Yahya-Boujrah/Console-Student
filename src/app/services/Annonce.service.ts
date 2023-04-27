import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http"
import {Annonce} from "../interfaces/Annonce.interface"
import { Observable } from "rxjs";

@Injectable()
export class AnnonceService{
  private apiUrl = 'http://localhost:5000/Annonces';  

  constructor(private http: HttpClient) {}

  getAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl);
  }

}