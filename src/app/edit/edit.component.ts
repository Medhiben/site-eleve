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
  eleveService: any;


  constructor(private eleveservice : EleveService,private router: Router, private route: ActivatedRoute ){}

  createForm : FormGroup = new FormGroup(
    {
      nom : new FormControl('', Validators.required),
      prenom : new FormControl('', Validators.required),
      age : new FormControl(null, [Validators.min(1), Validators.max(120)]),
      classe : new FormControl(null, [Validators.required]),
      specialite : new FormControl(null, [Validators.required]),
      redouble : new FormControl(null, [Validators.required]),
    }) ;

    ngOnInit() {
     if(this.route.snapshot.paramMap) {
      this.eleveId = this.route.snapshot.paramMap.get('id');
      console.log(this.eleveId)

    }

  
    this.eleveId = this.route.snapshot.paramMap.get('id');

    if (this.eleveId) {
      this.eleveService.getEleve(this.eleveId).subscribe(
        (response: Eleve) => {
          this.eleve = response;
          console.log(response);
          this.createForm.patchValue({
            response : new FormGroup({
              nom: new FormControl('response.nom', Validators.required),
              prenom: new FormControl('response.prenom', Validators.required),
              age: new FormControl('response.age', [Validators.min(1), Validators.max(120)]),
              classe: new FormControl('response.classe', [Validators.required]),
              specialite: new FormControl('response.specialite', [Validators.required]),
              redouble: new FormControl('response.redouble', [Validators.required]),
            }) ,
          });
        },
        (error: any) => {
          console.error('Erreur lors de la récupération de l\'élève', error);
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


  