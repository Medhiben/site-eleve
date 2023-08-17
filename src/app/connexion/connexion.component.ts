import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  connexion() {
    // Simuler la connexion réussie ici
    // ...

    // Naviguer vers la page de connexion directe après la connexion
    this.router.navigate(['page-connexion-director'], { relativeTo: this.route });
  }
}