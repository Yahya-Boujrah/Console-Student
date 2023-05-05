import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Convention } from 'src/app/interfaces/Convention.interface';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { ConventionService } from 'src/app/services/Convention.service';

@Component({
  selector: 'app-form-convention',
  templateUrl: './form-convention.component.html',
  styleUrls: ['./form-convention.component.css'],
  providers:[ConventionService]
})
export class FormConventionComponent {
  @Input() conventionType!: string;

  conventionResponse!: CustomResponse;
  private dataSubject = new BehaviorSubject<any>(null);

  
  constructor(private conventionService: ConventionService){}

    saveConvention(conventionForm : NgForm){
      const convention : Convention = {
        type: this.conventionType,
        nomSociete : conventionForm.value.nom,
        adresseSociete : conventionForm.value.adresse,
        EmailSociete : conventionForm.value.email,
        NomRepresentantSociete : conventionForm.value.nomRepresentant,
        NomRepresentantEcole : conventionForm.value.nomRepresentantEcole,
        sujetStage :  conventionForm.value.sujetStage,
        dateDebutStage : conventionForm.value.dateDebutStage,
        dateFinStage : conventionForm.value.dateFinStage,
        nomEncadrantSociete : conventionForm.value.nomEncadrant,
        nomEncadrantEcole : conventionForm.value.nomEncadrantEcole,
        numeroContrantAssurance : conventionForm.value.numeroContrantAssurance,
        montantGratification : conventionForm.value.montantGratification,
        modalitePaiementGratification : conventionForm.value.modalitePaiementGratification
      
    }

    this.conventionService.saveConvention$(convention).subscribe(response => {
      this.dataSubject.next(
        {...response, data: {conventions: [response.data.convention, ...this.dataSubject.value.data.conventions ]}}
      )
      this.conventionResponse = this.dataSubject.value;
    },
    (error : HttpErrorResponse) => {
      alert(error.message)
    });
    conventionForm.reset();
  }
  
}
