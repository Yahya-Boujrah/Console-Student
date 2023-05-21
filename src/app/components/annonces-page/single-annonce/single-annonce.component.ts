import { Component, Input, OnInit } from '@angular/core';
import { Annonce } from 'src/app/interfaces/Annonce.interface';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-annonce',
  templateUrl: './single-annonce.component.html',
  styleUrls: ['./single-annonce.component.css']
})
export class SingleAnnonceComponent implements OnInit {
  @Input() Annonce!: Annonce;

  faNewspaper = faNewspaper;

  constructor(private router:Router, private activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.Annonce = history.state.annonce;
  }

}
