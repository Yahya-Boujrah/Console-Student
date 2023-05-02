import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './components/annonces-page/annonces/annonces.component';
import { ListServiceComponent } from './components/services-page/services-divers/list-service/list-service.component';
import { ListConventionsComponent } from './components/services-page/conventions/list-conventions/list-conventions.component';

const routes: Routes = [
  {
    path: 'annonce' , component: AnnoncesComponent
  },
  {
    path: 'services-divers', component: ListServiceComponent
  },
  {
    path:'convention', component: ListConventionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
