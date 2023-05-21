import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cne-date',
  templateUrl: './cne-date.component.html',
  styleUrls: ['./cne-date.component.css']
})
export class CneDateComponent 
{

  constructor(private loginService: LoginService, private popup: NgToastService){}

  submit(form : NgForm){

    this.loginService.getPassword(form.value.cne, form.value.date).subscribe( response => {
      this.popup.success({detail:"Success",summary: response?.data?.message ,duration:2500});
    }, error => {
      this.popup.error({detail:"Error",summary:"Incorrect cne or password",duration:2500});
    });
    form.reset();
  }

}
