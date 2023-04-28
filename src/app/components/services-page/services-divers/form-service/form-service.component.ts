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

  onAddDemand(){
    if(this.selectedValue ===''){
      this.message="Veuillez spécifier l'objet de la demande"
    }else{
      const newDemand = {
        Date:'2022/2023',
        TypeDemande:this.selectedValue,
        Etat:'Nouvelle'
      }
      this.demandCreated.emit(newDemand);
      this.message='';
    }  
  }
}
