import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EleveService } from '../service/eleve.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Eleve } from '../model/eleve';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  eleve!: Eleve;
  eleveId!: string | null;


  constructor(private eleveservice : EleveService,private router: Router, private route: ActivatedRoute ){}
  ngOnInit() {
    
  }
  

  createForm : FormGroup = new FormGroup(
    {
      nom : new FormControl('', Validators.required),
      prenom : new FormControl('', Validators.required),
      age : new FormControl(null, [Validators.min(1), Validators.max(120)]),
      classe : new FormControl(null, [Validators.required]),
      specialite : new FormControl(null, [Validators.required]),
      redouble : new FormControl(null, [Validators.required]),
    }) ;

    
  
    create() {
    this.eleveservice.sendEleves(this.createForm.value).subscribe(
      (response) => {
        this.router.navigate(["/home"]);
        console.log(response);
      })
    };

}
