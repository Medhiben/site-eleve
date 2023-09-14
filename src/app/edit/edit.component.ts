import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EleveService } from '../service/eleve.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Eleve } from '../model/eleve';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  eleve!: Eleve;
  eleveId!: string | null;
  createForm! : FormGroup;

  constructor(private eleveservice : EleveService,private router: Router, private route: ActivatedRoute ){}

   
    ngOnInit() {
     if(this.route.snapshot.paramMap) {
      this.eleveId = this.route.snapshot.paramMap.get('id');
      console.log(this.eleveId)

    }

  
    this.eleveId = this.route.snapshot.paramMap.get('id');

    if (this.eleveId) {
      this.eleveservice.getEleve(this.eleveId).subscribe(
        (response: Eleve) => {
          this.eleve = response;
          console.log(response);
          this.createForm = new FormGroup({
              nom: new FormControl(this.eleve.nom, Validators.required),
              prenom: new FormControl(this.eleve.prenom, Validators.required),
              age: new FormControl(this.eleve.age, [Validators.min(1), Validators.max(120)]),
              classe: new FormControl(this.eleve.classe, [Validators.required]),
              specialite: new FormControl(this.eleve.specialite, [Validators.required]),
              redouble: new FormControl(this.eleve.redouble, [Validators.required]),
          });
        },
        (error: any) => {
          console.error('Erreur lors de la récupération de l élève', error);
        }
      );
    }
  }

  
    create() {
    this.eleveservice.sendEleves(this.createForm.value).subscribe(
      (response) => {
        this.router.navigate(["/home"]);
        console.log(response);
      })
    };

}


  