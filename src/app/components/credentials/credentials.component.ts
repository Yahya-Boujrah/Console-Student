import { Component } from '@angular/core';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent {
  toggled!: boolean ;

  toggle(){
    this.toggled = !this.toggled;
    console.log(this.toggled)
  }


}
