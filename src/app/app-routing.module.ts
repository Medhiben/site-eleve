import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'eleves/:id', component: EditComponent }, 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
