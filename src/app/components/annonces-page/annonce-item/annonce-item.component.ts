import { Component,   Input, Output , OnInit , EventEmitter } from '@angular/core';
import {Annonce} from '../../../interfaces/Annonce.interface';

@Component({
  selector: 'app-annonce-item',
  templateUrl: './annonce-item.component.html',
  styleUrls: ['./annonce-item.component.css']
})
export class AnnonceItemComponent implements OnInit {
  @Input() Annonce!: {id?: number ,titre: string,  datePublication:any, niveaux:string, filiere:string, contenu:string};
  @Input() index!:number;

  // @Output() AnnonceEvent = new EventEmitter<Annonce>();

  // singlePage!:boolean;

  ngOnInit(){
    // this.singlePage =false;
  }

  // onSingleAnnoncePage(annonce:Annonce){
  // //   this.singlePage=true;
  // //   this.AnnonceEvent.emit(this.Annonce);
  // }
}
