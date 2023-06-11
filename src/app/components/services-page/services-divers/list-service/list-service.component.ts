import { Component, Input, OnInit } from '@angular/core';
import { Demande } from 'src/app/interfaces/Demande.interface';
import { DemandeService } from 'src/app/services/Demande.service';
import { faFilePen , faTrash} from '@fortawesome/free-solid-svg-icons';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpErrorResponse } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'],
  providers: [DemandeService]
})
export class ListServiceComponent implements OnInit {
  @Input() myDemand!:string;
  @Input() myDate!:string;

  faFilePen = faFilePen;
  faTrash = faTrash;
  demandeResponse !: CustomResponse;
  deleteDemand !: Demande;

  private dataSubject = new BehaviorSubject<any>(null);

  constructor(private demandeService:DemandeService,  private popup: NgToastService){}

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

  onDemandAdded(demande: Demande) {
    const existingDemandes = this.dataSubject.value.data.demandes;
    console.log(existingDemandes)
    console.log(demande)
    const isDuplicateDemand = existingDemandes.some(d => d.type === demande.type);
    console.log(isDuplicateDemand);
  
    if (isDuplicateDemand) {
      this.popup.error({ detail: "Error", summary: "Duplicate demand", duration: 2500 });
      return;
    }
  
    this.demandeService.saveDemande$(demande).subscribe(
      response => {
        this.dataSubject.next({
          ...response,
          data: {
            demandes: [response.data.demande, ...existingDemandes]
          }
        });
  
        this.demandeResponse = this.dataSubject.value;
        this.popup.success({
          detail: "Success",
          summary: "Demand saved successfully",
          duration: 2500
        });
      },
      error => {
        this.popup.error({
          detail: "Error",
          summary: "Something went wrong",
          duration: 2500
        });
      }
    );
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
          { demandes: this.dataSubject.value.data.demandes.filter( (dem: { id: number | undefined; }) => dem.id !== demande.id)}
        }
      )
      this.demandeResponse = this.dataSubject.value;
    },
    (error : HttpErrorResponse) => {
      alert(error.message)
    });
}

onOpenModal(demand: any, mode: string){

  const container = document.getElementById('app-container');
  const button = document.createElement('button');
  button.type ='button';
  button.style.display = 'none';
  button.setAttribute('data-bs-toggle', 'modal');


  if(mode === 'delete'){
    this.deleteDemand = demand;
    button.setAttribute('data-bs-target', '#deleteModal');
  }
  container?.appendChild(button);
  button.click();
}

}
