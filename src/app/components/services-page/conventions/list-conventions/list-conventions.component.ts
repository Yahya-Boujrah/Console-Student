import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faFile , faTrash , faPenToSquare , faDownload} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Convention } from 'src/app/interfaces/Convention.interface';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { ConventionService } from 'src/app/services/Convention.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-conventions',
  templateUrl: './list-conventions.component.html',
  styleUrls: ['./list-conventions.component.css'],
  providers: [ConventionService]
})
export class ListConventionsComponent implements OnInit {

  faFile = faFile;
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  faDownload= faDownload;


  selectedValue:string = "";
  message:string = '';
  showForm: boolean = false;


  conventionResponse !: CustomResponse;

  private dataSubject = new BehaviorSubject<any>(null);

  constructor(private conventionService:ConventionService){}

  ngOnInit(): void {
    this.conventionService.conventions$.subscribe( (response) => {
        this.dataSubject.next(response); 
        this.conventionResponse = { ...response , data: { conventions: response.data.conventions?.reverse() } } ;
    },
    (error : HttpErrorResponse) => {
      alert(error.message)
    });

  }

  onAddDemand(): void{
    if(this.selectedValue ===''){
      this.message="Veuillez spécifier l'objet de la demande";
    }else if(this.showForm){
      this.message="Veuillez continuer votre demande acctuelle";
    }else{
        this.showForm = true;
        this.message='';
      }
    }  

    saveConvention(conventionForm : NgForm){
      const convention : Convention = {
        type: this.selectedValue,
        nomSociete : conventionForm.value.nom,
        adresseSociete : conventionForm.value.adresse,
        EmailSociete : conventionForm.value.email,
        NomRepresentantSociete : conventionForm.value.nomRepresentant,
        NomRepresentantEcole : conventionForm.value.nomRepresentantEcole,
        sujetStage :  conventionForm.value.sujet,
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
    }

    deleteConvention(convention: Convention) : void{
      this.conventionService.deleteConvention$(convention.id as number).subscribe(response => {
        this.dataSubject.next(
          {...response, data: 
            { conventions: this.dataSubject.value.data.conventions.filter(conv => conv.id !== convention.id)}
          }
        )
        this.conventionResponse = this.dataSubject.value;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      });
     
  }

    updateConvention(convention: Convention) : void{
      this.conventionService.updateConvention$(convention).subscribe(response => {
         this.conventionResponse = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      });

  }

    downloadPDF(): void {
      let DATA: any = document.getElementById('pdf');

      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;

        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

        PDF.save('Convention.pdf');
      });
  }
}
