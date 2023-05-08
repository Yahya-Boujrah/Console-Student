import { Component } from '@angular/core';
import { faHouse, faUserGroup, faScroll, faNoteSticky , faCaretDown, faUser , faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";

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
  faUser = faUser;
  faRightFromBracket= faRightFromBracket;

  dropdown: HTMLLIElement = document.querySelector("#dropdown") as HTMLLIElement;
  menu: HTMLDivElement = document.querySelector("#menu") as HTMLDivElement;


  classToggled : boolean = true;

  constructor(private route:ActivatedRoute, private router:Router) {
  }

  onMouseEnter(){
    this.classToggled = !this.classToggled;
  }
  onMouseOut(){
    this.classToggled = !this.classToggled;
  }

  annonce(){
    this.router.navigate(['annonce'], {relativeTo: this.route})
  }
  information(){
    this.router.navigate(['information'], {relativeTo: this.route})
  }
  servicesDivers(){
    this.router.navigate(['services-divers'], {relativeTo: this.route})
  }
  convention(){
    this.router.navigate(['convention'], {relativeTo: this.route})
  }
  demandeService(){
    this.router.navigate(['demande-service'], {relativeTo: this.route})
  }

}
