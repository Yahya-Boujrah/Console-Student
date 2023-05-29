import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";
import { NgToastService } from 'ng-angular-popup'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authToken !: string;

  constructor(private authService : LoginService, private router : Router , private popup: NgToastService) {}


  onSubmit(form : NgForm){
    this.authService.authenticate(form.value.email, form.value.password).subscribe(response =>{
      if (response) {
        this.authToken = response.token;
        sessionStorage.setItem('token', this.authToken);
        this.popup.success({detail:"Success",summary:"Logged successfully",duration:2500});

        this.router.navigate(['/change-pwd']);
        }
    }, error => {
      this.popup.error({detail:"Error",summary:"Something gone wrong",duration:2500});
    });
    form.reset();
  }
}
