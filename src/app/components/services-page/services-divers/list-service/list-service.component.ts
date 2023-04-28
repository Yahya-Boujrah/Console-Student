import { Component, Input } from '@angular/core';
import { Demande } from 'src/app/interfaces/Demande.interface';
import { DemandeService } from 'src/app/services/Demande.service';
import { faFilePen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'],
  providers: [DemandeService]
})
export class ListServiceComponent {
  @Input() myDemand!:string;
  @Input() myDate!:string;

  Demandes: any[] = [];

  faFilePen = faFilePen;

  constructor(private demandeService:DemandeService){}

  ngOnInit(): void {
    this.demandeService.getDemande().subscribe( (Demandes) => {
      this.Demandes = Demandes
    });
  }

  onSelectYear(data:string){
    this.myDate = data;
  }

  onSelectDemand(data:string){
    this.myDemand = data;

  }

  onDemandAdded(demande: Demande){
      this.demandeService.addDemande(demande).subscribe((demande) => {
        this.Demandes.push(demande);
      })
  }

}
