import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faFile , faTrash , faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Convention } from 'src/app/interfaces/Convention.interface';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { ConventionService } from 'src/app/services/Convention.service';
@Component({
  selector: 'app-list-conventions',
  templateUrl: './list-conventions.component.html',
  styleUrls: ['./list-conventions.component.css'],
  providers: [ConventionService]
})
export class ListConventionsComponent implements OnInit {

  faFile = faFile;
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;


  selectedValue:string = "";
  message:string = '';
  showForm: boolean = false;


  conventionResponse !: CustomResponse;

  private dataSubject = new BehaviorSubject<any>(null);

  constructor(private conventionService:ConventionService){}

  ngOnInit(): void {
    this.conventionService.conventions$.subscribe( (response) => {
        this.dataSubject.next(response); 
        this.conventionResponse = { ...response , data: { conventions: response.data.conventions?.reverse() } } ;
    },
    (error : HttpErrorResponse) => {
      alert(error.message)
    });

  }

  onAddDemand(){
    if(this.selectedValue ===''){
      this.message="Veuillez spécifier l'objet de la demande";
    }else if(this.showForm){
      this.message="Veuillez continuer votre demande acctuelle";
    }else{
        this.showForm = true;
        this.message='';
      }
    }  

    deleteConvention(convention: Convention){
      this.conventionService.deleteConvention$(convention.id as number).subscribe(response => {
        this.dataSubject.next(
          {...response, data: 
            { conventions: this.dataSubject.value.data.conventions.filter(conv => conv.id !== convention.id)}
          }
        )
        this.conventionResponse = this.dataSubject.value;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      });
     
  }
    updateConvention(convention: Convention){
      this.conventionService.updateConvention$(convention).subscribe(response => {
         this.conventionResponse = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      });

  }
}
