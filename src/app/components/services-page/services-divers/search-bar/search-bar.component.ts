import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() YeadSelected = new EventEmitter<string>();
  @Output() DemandSelected = new EventEmitter<string>();

  selectedYearValue:string ='2022/2023';
  selectedDemandValue!:string;

  ngOnInit(){
    this.selectedDemandValue= 'All';

  }
  onSelectYear(){
    this.YeadSelected.emit(this.selectedYearValue);
  }

  onSelectDemand(){
    this.DemandSelected.emit(this.selectedDemandValue);
  }
}
