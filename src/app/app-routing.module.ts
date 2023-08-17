import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageConnexionDirectorComponent } from './page-connexion-director/page-connexion-director.component';
const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'page-connexion-director', component: PageConnexionDirectorComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
