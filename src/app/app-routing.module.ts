import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './components/annonces-page/annonces/annonces.component';
import { SingleAnnonceComponent } from './components/annonces-page/single-annonce/single-annonce.component';
import { ListServiceComponent } from './components/services-page/services-divers/list-service/list-service.component';
import { ListConventionsComponent } from './components/services-page/conventions/list-conventions/list-conventions.component';
import { InformationPageComponent } from './components/information-page/information-page.component';
import { ListDemandeComponent } from './components/services-page/demande-service/list-demande.component';
import {CredentialsComponent} from "./components/credentials/credentials.component";
import {CardComponent} from "./components/credentials/card/card.component";
import {LoginComponent} from "./components/credentials/card/login/login.component";
import {CneDateComponent} from "./components/credentials/card/cne-date/cne-date.component";
import {NavigationComponent} from "./components/navigation/navigation.component";

const routes: Routes = [
  // {
  //   path:'' , component: CredentialsComponent, children: [
  //     {path: 'card' , component: CardComponent, children: [
  //         // {path :'',  redirectTo: 'login'},
  //         {path: 'login', component: LoginComponent},
  //         {path: 'cne-date', component: CneDateComponent}
  //       ]}
  //   ]
  // },
  {
    path:'' , component: CredentialsComponent
  },
  {
    path:'navigation', component: NavigationComponent, children : [
      {
        path: 'information' , component: InformationPageComponent
      },
      {
        path: 'annonce' , component: AnnoncesComponent, children: [
          {
            path:'single-annonce', component: SingleAnnonceComponent,
          }
        ]
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
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
