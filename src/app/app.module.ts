import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageConnexionDirectorComponent } from './page-connexion-director/page-connexion-director.component';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    PageConnexionDirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
