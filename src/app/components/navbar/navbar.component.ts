import { Component } from '@angular/core';
import { faHouse, faUserGroup, faScroll, faNoteSticky , faCaretDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username: string = 'NOM Prenom'

  faHouse = faHouse;
  faUserGroup = faUserGroup;
  faScroll = faScroll;
  faNoteSticky = faNoteSticky;
  faCaretDown = faCaretDown;

  dropdown: HTMLLIElement = document.querySelector("#dropdown") as HTMLLIElement;
  menu: HTMLDivElement = document.querySelector("#menu") as HTMLDivElement;
 
  
  classToggled = true;

  onMouseEnter(){
    this.classToggled = !this.classToggled;  
  }
  onMouseOut(){
    this.classToggled = !this.classToggled; 
  }

}
