import { Component } from '@angular/core';
import { faFile} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-conventions',
  templateUrl: './list-conventions.component.html',
  styleUrls: ['./list-conventions.component.css']
})
export class ListConventionsComponent {

  faFile = faFile;


  selectedValue:string="";
  message:string='';

  onAddDemand(){
    if(this.selectedValue ===''){
      this.message="Veuillez spécifier l'objet de la demande"
      console.log(this.message);
    }else{
        console.log(this.selectedValue);
      }
      // this.demandCreated.emit(newDemand);
      this.message='';
    }  


}
