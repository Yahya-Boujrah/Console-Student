import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './components/annonces-page/annonces/annonces.component';
import { SingleAnnonceComponent } from './components/annonces-page/single-annonce/single-annonce.component';
import { ListServiceComponent } from './components/services-page/services-divers/list-service/list-service.component';
import { ListConventionsComponent } from './components/services-page/conventions/list-conventions/list-conventions.component';
import { InformationPageComponent } from './components/information-page/information-page.component';
import { ListDemandeComponent } from './components/services-page/demande-service/list-demande.component';
import {CredentialsComponent} from "./components/credentials/credentials.component";
import {LoginComponent} from "./components/credentials/login/login.component";
import {CneDateComponent} from "./components/credentials/cne-date/cne-date.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {AuthGuard} from "./auth-guard.guard";

const routes: Routes = [
  {
    path:'' ,canActivate:[AuthGuard], children:[
      {
        path:'' , component: CredentialsComponent, children: [
          {path: '', component: LoginComponent},
          {path: 'cne-date', component: CneDateComponent}
        ]
      }
      ,
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
      },
      {path: '**', redirectTo:''}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
