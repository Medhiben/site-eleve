import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {

  }

  connexion() {
    this.router.navigate(['./page-connexion-director']);

  }
}
