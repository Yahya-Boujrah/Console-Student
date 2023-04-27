import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnnonceItemComponent } from './components/annonces-page/annonce-item/annonce-item.component';
import { AnnoncesComponent } from './components/annonces-page/annonces/annonces.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnnonceItemComponent,
    AnnoncesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
