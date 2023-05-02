import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/interfaces/Annonce.interface';
import { AnnonceService } from 'src/app/services/Annonce.service';
import { faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css'],
  providers: [AnnonceService]
})
export class AnnoncesComponent implements OnInit {
  faNewspaper = faNewspaper;

  annonceResponse !: CustomResponse;

  constructor(private annonceService : AnnonceService){}

  ngOnInit(): void {
    this.annonceService.annonces$.subscribe(response =>{
      this.annonceResponse = { ...response , data: { annonces: response.data.annonces?.reverse() } }
    });

  }
}
