import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-convention',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarConventionComponent implements OnInit {
  @Output() YeadSelected = new EventEmitter<string>();
  @Output() ConventionSelected = new EventEmitter<string>();

  selectedYearValue:string ='2022/2023';
  selectedConventionValue!:string;

  ngOnInit(){
    this.selectedConventionValue= 'All';

  }
  onSelectYear(){
    this.YeadSelected.emit(this.selectedYearValue);
  }

  onSelectConvention(){
    this.ConventionSelected.emit(this.selectedConventionValue);
  }
}
