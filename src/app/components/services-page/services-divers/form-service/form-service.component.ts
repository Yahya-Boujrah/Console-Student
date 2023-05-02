import { Component, EventEmitter, Output } from '@angular/core';
import { Demande } from 'src/app/interfaces/Demande.interface';

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.css']
})
export class FormServiceComponent {
  @Output() demandCreated = new EventEmitter<Demande>();

  selectedValue:string="";
  message:string='';
  i: number = 1;

  onAddDemand(){
    if(this.selectedValue ===''){
      this.message="Veuillez spécifier l'objet de la demande"
    }else{
      const newDemand = {
        nom:'Demande ' + (this.i++),
        dateDemande : new Date(),
        type : this.selectedValue,
        studentId:'current student',
        etat : 'Nouvelle'
      }
      this.demandCreated.emit(newDemand);
      this.message='';
    }  
  }
}
