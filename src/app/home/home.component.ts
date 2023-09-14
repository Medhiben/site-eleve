import { Component, Input, OnInit } from '@angular/core';
import { EleveService } from '../service/eleve.service';
import { Eleve } from '../model/eleve';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 constructor(private eleveservice : EleveService, private route : Router){}
 displayedColumns: string[] = [ 'nom','prenom','age','classe','specialite',
  'redouble','edit','delete'];
  eleves: Eleve[] = [];

 ngOnInit() {
  this.eleveservice.getEleves().subscribe(
    (response) => {
      this.eleves = response;
      console.log(response);
    }
  )



}

redirectTo() {
  this.route.navigate(["/create"]);
  }

  editEleve(eleve: Eleve) {
    
    this.route.navigateByUrl('eleves/' + eleve.id);
  }

  
  deleteEleve(eleve: Eleve){
    this.eleveservice.deleteEleve(eleve.id)
    .subscribe( eleve => {
      this.eleveservice.getEleves().subscribe(
        (response) => {
          this.eleves = response;
          console.log(response);
        }
      )
     alert('elève supprimé avec succès');
  })

  }
}



