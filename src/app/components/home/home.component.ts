import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/User.interface';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faNewspaper = faNewspaper;
  user !: User ;
  
  username = "username";

  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    this.userService.getInfo().subscribe(response =>{
      this.user = response.data.user as User;

      this.username = this.user.nom + ' ' + this.user.prenom;
    })
  }
}
