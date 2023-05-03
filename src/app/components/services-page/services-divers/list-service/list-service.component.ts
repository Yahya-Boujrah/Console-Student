import { Component, Input } from '@angular/core';
import { Demande } from 'src/app/interfaces/Demande.interface';
import { DemandeService } from 'src/app/services/Demande.service';
import { faFilePen , faTrash} from '@fortawesome/free-solid-svg-icons';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'],
  providers: [DemandeService]
})
export class ListServiceComponent {
  @Input() myDemand!:string;
  @Input() myDate!:string;

  faFilePen = faFilePen;
  faTrash = faTrash;
  demandeResponse !: CustomResponse;

  private dataSubject = new BehaviorSubject<any>(null);

  constructor(private demandeService:DemandeService){}

  ngOnInit(): void {
    this.demandeService.demandes$.subscribe( (response) => {
        this.dataSubject.next(response); 
        this.demandeResponse = { ...response , data: { demandes: response.data.demandes?.reverse() } } ;
    },
    (error : HttpErrorResponse) => {
      alert(error.message)
    });

  }

  onSelectYear(data:string){
    this.myDate = data;
  }


  onDemandAdded(demande: Demande){
        this.demandeService.saveDemande$(demande).subscribe(response => {
          this.dataSubject.next(
            {...response, data: {demandes: [response.data.demande, ...this.dataSubject.value.data.demandes ]}}
          )
          this.demandeResponse = this.dataSubject.value;
        },
        (error : HttpErrorResponse) => {
          alert(error.message)
        });
       
  }

  filterDemande(type : string){
    this.demandeService.filterDemande$(type, this.dataSubject.value).subscribe(response => {
      this.demandeResponse = response;
    },
    (error : HttpErrorResponse) => {
      alert(error.message)
    });
  }

  
  deleteDemande(demande: Demande){
    this.demandeService.deleteDemande$(demande.id as number).subscribe(response => {
      this.dataSubject.next(
        {...response, data: 
          { demandes: this.dataSubject.value.data.demandes.filter( dem  => dem.id !== demande.id)}
        }
      )
      this.demandeResponse = this.dataSubject.value;
    },
    (error : HttpErrorResponse) => {
      alert(error.message)
    });
   
}

}
