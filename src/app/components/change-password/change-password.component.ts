import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { UserService } from 'src/app/services/User.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  pwdResponse!: CustomResponse;

  constructor(private userService: UserService, private router: Router, private popup: NgToastService) { }

  changePwd(form: NgForm) {

    if (form.value.newPassword === form.value.confirmPassword) {
      this.userService.changePassword(form.value.newPassword).subscribe(response => {
        this.pwdResponse = response;
        this.popup.success({ detail: "Success", summary: "Password changed successfully", duration: 2500 });

      }, error => {
        this.popup.error({ detail: "Error", summary: "Something gone wrong", duration: 2500 });
      });
    }else{
      this.popup.error({ detail: "Error", summary: "Password does not match", duration: 2500 });

    }
    form.reset();

    this.router.navigate(['navigation']);

  }

}

