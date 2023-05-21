import { Component, OnInit } from '@angular/core';
import { faHouse, faUserGroup, faScroll, faNoteSticky , faCaretDown, faUser , faRightFromBracket, faSquarePollHorizontal} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";
import { User } from 'src/app/interfaces/User.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  username: string = 'NOM Prenom'

  faHouse = faHouse;
  faUserGroup = faUserGroup;
  faScroll = faScroll;
  faNoteSticky = faNoteSticky;
  faCaretDown = faCaretDown;
  faUser = faUser;
  faRightFromBracket= faRightFromBracket;
  faSquarePollHorizontal= faSquarePollHorizontal

  dropdown: HTMLLIElement = document.querySelector("#dropdown") as HTMLLIElement;
  menu: HTMLDivElement = document.querySelector("#menu") as HTMLDivElement;

  classToggled : boolean = true;

  user !:User;


  constructor(private route:ActivatedRoute, private router:Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.CurrentUser$.subscribe(user =>
      this.user = user,
    
    );
    this.username = this.user.nom + ' ' + this.user.prenom;
  }

  onMouseEnter(){
    this.classToggled = !this.classToggled;
  }
  onMouseOut(){
    this.classToggled = !this.classToggled;
  }

  annonce(){
    this.router.navigate(['annonces'], {relativeTo: this.route});
  }
  information(){
    this.router.navigate(['information'], {relativeTo: this.route});
  }
  servicesDivers(){
    this.router.navigate(['services-divers'], {relativeTo: this.route});
  }
  convention(){
    this.router.navigate(['convention'], {relativeTo: this.route});
  }
  demandeService(){
    this.router.navigate(['demande-service'], {relativeTo: this.route});
  }
  results(){
    this.router.navigate(['results'], {relativeTo: this.route});
  }
  deconnexion(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('passwordChanged');
    this.router.navigate(['']);
  }


}
