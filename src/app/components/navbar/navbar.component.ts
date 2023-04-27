import { Component } from '@angular/core';
import { faHouse, faUserGroup, faScroll, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

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

}
