import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  createForm : FormGroup = new FormGroup(
    {
      nom : new FormControl(null, [Validators.required]),
      prenom : new FormControl(null, [Validators.required, Validators.required]),
      age : new FormControl(null, [Validators.required]),
      classe : new FormControl(null, [Validators.required]),
      specialite : new FormControl(null, [Validators.required]),
      redouble : new FormControl(null, [Validators.required]),
// nom prenom string, age number, classe specialite select option, redouble chekbox
    }) ;
  
    create(){
      console.log(this.createForm.value);
    }
}
