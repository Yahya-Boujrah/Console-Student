import { Component } from '@angular/core';
import { faFile} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent {
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
      this.message='';
    }  

}
