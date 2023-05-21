import { Component, OnInit } from '@angular/core';
import { faIdCard, faAddressBook, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/User.interface';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent implements OnInit {

  faIdCard = faIdCard ;
  faAddressBook = faAddressBook;
  faUserCircle = faUserCircle;

  user !:User;

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.loginService.CurrentUser$.subscribe(user =>
      this.user = user
    );
  }

}
