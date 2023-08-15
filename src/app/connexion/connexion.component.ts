import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';

  connexion() {
    // Ajoutez ici la logique de connexion avec l'email et le mot de passe
  }
}
