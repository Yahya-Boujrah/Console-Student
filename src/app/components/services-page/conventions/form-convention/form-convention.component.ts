import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Convention } from 'src/app/interfaces/Convention.interface';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { ConventionService } from 'src/app/services/Convention.service';

@Component({
  selector: 'app-form-convention',
  templateUrl: './form-convention.component.html',
  styleUrls: ['./form-convention.component.css'],
  providers:[ConventionService]
})
export class FormConventionComponent {
  @Input() conventionType!: string;

  @Output() save = new EventEmitter<NgForm>();

  conventionResponse!: CustomResponse;
  private dataSubject = new BehaviorSubject<any>(null);

  
  constructor(private conventionService: ConventionService){}

    saveConvention(conventionForm : NgForm){
      this.save.emit(conventionForm);
      conventionForm.reset();
  }
  
}
