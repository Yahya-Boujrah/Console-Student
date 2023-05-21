import { Component,   Input, Output , OnInit , EventEmitter } from '@angular/core';
import {Annonce} from '../../../interfaces/Annonce.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-annonce-item',
  templateUrl: './annonce-item.component.html',
  styleUrls: ['./annonce-item.component.css']
})
export class AnnonceItemComponent implements OnInit {
  @Input() annonce!: Annonce;
  @Input() index!:number;

  constructor(private route:ActivatedRoute, private router:Router){
  }

  ngOnInit(){
  }

  singleAnnonce(){
    this.router.navigate(['single-annonce'], {relativeTo: this.route, state: {annonce : this.annonce }});
  }
}
