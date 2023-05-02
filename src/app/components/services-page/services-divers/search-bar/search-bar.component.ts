import { Component, EventEmitter, Output ,OnInit} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() YeadSelected = new EventEmitter<string>();
  @Output() DemandSelected = new EventEmitter<string>();

  selectedYearValue:string ='2022/2023';
  selectedDemandValue:string = 'All';

  ngOnInit(){}
  
  onSelectYear(){
    this.YeadSelected.emit(this.selectedYearValue);
  }

  onSelectDemand(){
    console.log(this.selectedDemandValue);
    this.DemandSelected.emit(this.selectedDemandValue);
  }
}
