import { Component, OnInit } from '@angular/core';
import { faIdCard, faAddressBook, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/User.interface';
import { UserService } from 'src/app/services/User.service';


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

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getInfo().subscribe(response =>{
      this.user = response.data.user as User;
    })
  }

}
