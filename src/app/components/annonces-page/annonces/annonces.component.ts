import { Component } from '@angular/core';
import { Annonce } from 'src/app/interfaces/Annonce.interface';
import { AnnonceService } from 'src/app/services/Annonce.service';
import { faNewspaper} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css'],
  providers: [AnnonceService]
})
export class AnnoncesComponent {
  Annonces: Annonce[] =[];

  faNewspaper = faNewspaper;

  constructor(private annonceService : AnnonceService){}

  ngOnInit(): void {
    this.annonceService.getAnnonce().subscribe( (Annonces) => {
      this.Annonces = Annonces
    });
  }
}
