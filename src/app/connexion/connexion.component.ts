import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  user = {email : 'mramdani@email.com', password : 'abcdefgh'};
  loginForm : FormGroup = new FormGroup(
    {
      email : new FormControl('mramdani@email.com', [Validators.required]),
      password : new FormControl('abcdefgh', [Validators.required, Validators.minLength(8)]),
    }) ;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit() {
    if(this.loginForm.value.email === this.user.email && this.loginForm.value.password === this.user.password){
    this.router.navigate(["/home"]);
    }else {
      this.loginForm.setErrors({
        incorrect : true
      })   
    }
  }

  
}