import { Component, Input } from '@angular/core';
import { Convention } from '../../../../../interfaces/Convention.interface';

@Component({
  selector: 'app-convention-pdf-template',
  templateUrl: './convention-pdf-template.component.html',
  styleUrls: ['./convention-pdf-template.component.css']
})
export class ConventionPdfTemplateComponent {
  @Input() convention!: Convention; ;

}
