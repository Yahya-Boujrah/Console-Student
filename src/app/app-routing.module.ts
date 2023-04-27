import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './components/annonces-page/annonces/annonces.component';

const routes: Routes = [
  {
    path: 'annonce' , component: AnnoncesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
