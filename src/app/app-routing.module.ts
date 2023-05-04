import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './components/annonces-page/annonces/annonces.component';
import { ListServiceComponent } from './components/services-page/services-divers/list-service/list-service.component';
import { ListConventionsComponent } from './components/services-page/conventions/list-conventions/list-conventions.component';
import { InformationPageComponent } from './components/information-page/information-page.component';
import { ListDemandeComponent } from './components/services-page/demande-service/list-demande/list-demande.component';

const routes: Routes = [
  {
    // path: '' , component: InformationPageComponent
    path : '', redirectTo: 'information', pathMatch: 'full'
  },
  {
    path: 'information' , component: InformationPageComponent
  },
  {
    path: 'annonce' , component: AnnoncesComponent
  },
  {
    path: 'services-divers', component: ListServiceComponent
  },
  {
    path:'convention', component: ListConventionsComponent
  },
  {
    path: 'demande-service', component: ListDemandeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
