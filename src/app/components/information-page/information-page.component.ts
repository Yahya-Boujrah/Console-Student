import { Component } from '@angular/core';
import { faIdCard, faAddressBook, faUserCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent {

  faIdCard = faIdCard ;
  faAddressBook = faAddressBook;
  faUserCircle = faUserCircle;

  students = [
    {
    nom:'Hsaini',
    prenom:'Yassmine', 
    cni:'EE123456',
    dateNaissance:'25/09/2001', lieuNaissance:'Dakhla',
    nationnalite:'Marocaine',
    numApogee:123456, cne:'D12334566', niveau:'CI2', filiere:'GI',
    email:'yassmina@gmail.com', tel:'0606060606'
    }
  ];


}
