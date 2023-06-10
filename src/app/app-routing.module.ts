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
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ResultsPageComponent } from './components/results-page/results-page.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
  {
    path:'' , component: CredentialsComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'cne-date', component: CneDateComponent}
    ]
  },
  {
    path:'change-pwd', component: ChangePasswordComponent,canActivate:[AuthGuard]
  },
  {
    path:'' ,canActivate:[AuthGuard], children:[
      {
        path:'navigation', component: NavigationComponent, children : [
          {
            path: 'information' , component: InformationPageComponent
          },
          {
            path: 'annonces' , component: AnnoncesComponent,children:[]
          },
          {
            path:'annonces/single-annonce', component: SingleAnnonceComponent,
          },
          {
            path: 'services-divers', component: ListServiceComponent
          },
          {
            path:'convention', component: ListConventionsComponent
          },
          {
            path: 'demande-service', component: ListDemandeComponent
          },
          {
            path:'results', component:ResultsPageComponent
          }
        ]
      },
      {path: 'error', component: ErrorPageComponent},
      {path: '**', redirectTo:'error', pathMatch: 'full'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
