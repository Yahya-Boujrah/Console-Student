import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authToken !: string;

  constructor(private authService : LoginService, private router : Router) {

  }

  onSubmit(form : NgForm){
    this.authService.authenticate(form.value.email, form.value.password).subscribe(response =>{
      if (response) {
        this.authToken = response.token;
        sessionStorage.setItem('token', this.authToken);
        this.router.navigate(['navigation']);
      } else{
        console.log("failed ");
      }
    })
    form.reset();
  }
}
