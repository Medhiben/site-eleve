import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EleveService } from '../service/eleve.service';
import { Eleve } from '../model/eleve';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private eleveservice : EleveService,private router: Router, private route: ActivatedRoute ){}

  createForm : FormGroup = new FormGroup(
    {
      nom : new FormControl(null, [Validators.required]),
      prenom : new FormControl(null, [Validators.required, Validators.required]),
      age : new FormControl(null, [Validators.required,Validators.min(1), Validators.max(120)]),
      classe : new FormControl(null, [Validators.required]),
      specialite : new FormControl(null, [Validators.required]),
      redouble : new FormControl(null, [Validators.required]),
// nom prenom string, age number, classe specialite select option, redouble chekbox
    }) ;
  
    create() {
    this.eleveservice.sendEleves(this.createForm.value).subscribe(
      (response) => {
        this.router.navigate(["/home"]);
        console.log(response);
      })
    };
}
