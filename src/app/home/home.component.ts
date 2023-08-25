import { Component, OnInit } from '@angular/core';
import { EleveService } from '../service/eleve.service';
import { Eleve } from '../model/eleve';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 constructor(private eleveservice : EleveService, private route : Router ){}
 displayedColumns: string[] = [ 'nom','prenom','age','classe','specialite',
  'redouble'];
 eleves : Eleve[] = [];

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
}



