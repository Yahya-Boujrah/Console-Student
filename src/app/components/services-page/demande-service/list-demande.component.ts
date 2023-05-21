import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import { NgToastService } from 'ng-angular-popup';
import { Case } from 'src/app/interfaces/Case.interface';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { CaseService } from 'src/app/services/Case.service';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css'],
  providers:[CaseService]
})
export class ListDemandeComponent {
  faCircleExclamation = faCircleExclamation;
  caseResponse!: CustomResponse;
  caseSubmited: boolean = false; 


  constructor(private caseService : CaseService,  private popup: NgToastService){}

  saveCase(caseForm  : NgForm){
    const caseToAdd : Case = {
        type: caseForm.value.type,
        sujet: caseForm.value.sujet,
        description: caseForm.value.description,
        date: new Date(),
        studentId: 'current student',
        origine: 'portail',
        Statut:'Nouvelle'
    }

    this.caseService.save$(caseToAdd).subscribe(response => {
      this.caseResponse = response;
      this.caseSubmited = true;
      this.popup.success({detail:"Success",summary:"Demand sent successfully",duration:2500});
    }, error => {
      this.popup.error({detail:"Error",summary:"Something gone wrong",duration:2500});
    });
    caseForm.reset();
  }
  
}
