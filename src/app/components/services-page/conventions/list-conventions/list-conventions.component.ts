import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faFile, faTrash, faPenToSquare, faDownload } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Convention } from 'src/app/interfaces/Convention.interface';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { ConventionService } from 'src/app/services/Convention.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

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
  faDownload = faDownload;


  selectedValue: string = "";
  message: string = '';
  showForm: boolean = false;

  deleteConv!: Convention;
  updateConv!: Convention;


  conventionResponse !: CustomResponse;

  private dataSubject = new BehaviorSubject<any>(null);

  constructor(private conventionService: ConventionService, private popup: NgToastService) { }

  ngOnInit(): void {
    this.conventionService.conventions$.subscribe((response) => {
      this.dataSubject.next(response);
      this.conventionResponse = { ...response, data: { conventions: response.data.conventions?.reverse() } };
    },
      (error: HttpErrorResponse) => {
        alert(error.message)
      });

  }
  getCurrentDate(): string {
  const currentDate = new Date();
  return currentDate.toDateString();
}


  onAddDemand(): void {
    if (this.selectedValue === '') {
      this.message = "Veuillez spécifier l'objet de la demande";
      this.showForm = false;
    } else if (this.showForm) {
      this.message = "Veuillez continuer votre demande acctuelle";
    } else {

      const existingConventions = this.dataSubject.value.data.conventions;
      const isDuplicateConvention = existingConventions.some(c =>
        c.type === this.selectedValue
      );
    
      if (isDuplicateConvention) {
        this.popup.error({ detail: "Error", summary: "Duplicate convention", duration: 2500 });
        return;
      }
      this.showForm = true;
      this.message = '';
    }
  }

  saveConvention(conventionForm: NgForm) {
    const convention: Convention = {
      type: this.selectedValue,
      nomSociete: conventionForm.value.nom,
      adresseSociete: conventionForm.value.adresse,
      EmailSociete: conventionForm.value.email,
      NomRepresentantSociete: conventionForm.value.nomRepresentant,
      NomRepresentantEcole: conventionForm.value.nomRepresentantEcole,
      sujetStage: conventionForm.value.sujet,
      dateDebutStage: conventionForm.value.dateDebutStage,
      dateFinStage: conventionForm.value.dateFinStage,
      nomEncadrantSociete: conventionForm.value.nomEncadrant,
      nomEncadrantEcole: conventionForm.value.nomEncadrantEcole,
      numeroContrantAssurance: conventionForm.value.numeroContrantAssurance,
      montantGratification: conventionForm.value.montantGratification,
      modalitePaiementGratification: conventionForm.value.modalitePaiementGratification

    }

    this.conventionService.saveConvention$(convention).subscribe(response => {
      this.dataSubject.next(
        { ...response, data: { conventions: [response.data.convention, ...this.dataSubject.value.data.conventions] } }
      )
      this.conventionResponse = this.dataSubject.value;
      this.popup.success({ detail: "Success", summary: "Convention saved successfully", duration: 2500 });
      this.showForm = false;
    }, error => {
      this.popup.error({ detail: "Error", summary: "Something gone wrong", duration: 2500 });
    })
  }

  deleteConvention(convention: Convention): void {
    this.conventionService.deleteConvention$(convention.id as number).subscribe(response => {
      this.dataSubject.next(
        {
          ...response, data:
            { conventions: this.dataSubject.value.data.conventions.filter(conv => conv.id !== convention.id) }
        }
      )
      this.conventionResponse = this.dataSubject.value;
      this.popup.success({ detail: 'Success', summary: 'Convention deleted', position: 'tr', duration: 2500 });

    },
      (error: HttpErrorResponse) => {
        this.popup.error({ detail: 'Error', summary: 'Something gone wrong', position: 'tr', duration: 2500 });
      });

  }

  updateConvention(convention: Convention): void {
      this.conventionService.updateConvention$(convention).subscribe(
        response => {
          if (response.data && response.data.convention) {
            const updated  = response.data.convention;
            const updatedConventions = this.dataSubject.value.data.conventions.map((c: Convention) => {
              if (c.id === updated?.id) {
                return { ...c, ...updated };
              }
              return c;
            });
    
            this.dataSubject.next({
              ...response,
              data: {
                ...this.dataSubject.value.data,
                agents: updatedConventions
              }
            });
    
            this.conventionResponse = this.dataSubject.value;
            this.popup.success({ detail: 'Success', summary: 'Convention updated', position: 'tr', duration: 2500 });
  
          } else {
            console.error('Invalid response or missing convention data.');
          }
        },
        error => {
          this.popup.error({ detail: 'Error', summary: 'Something gone wrong', position: 'tr', duration: 2500 });
        }
      );
    }

  onOpenModal(convention: Convention, mode: string) {

    const container = document.getElementById('app-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if(mode === 'edit'){
      this.updateConv = convention;
      button.setAttribute('data-bs-target', '#updateModal');
    }
    if (mode === 'delete') {
      this.deleteConv = convention;
      button.setAttribute('data-bs-target', '#deleteModal');
    }
    container?.appendChild(button);
    button.click();
  }

  
  downloadPDF(): void {
    let DATA: any = document.getElementById('pdf');
    console.log(DATA);
      DATA.style.display = 'block';
      DATA.style.position = 'absolute';
      DATA.style.bottom = '-9999px'

  
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 210;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
  
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF({ format: 'a4' });
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
  
      PDF.save('Convention.pdf');
      DATA.style.display = 'none';
    });
  }
  
}