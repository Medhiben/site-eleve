import { Component, OnInit } from '@angular/core';
import { EleveService } from '../service/eleve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 constructor(private eleveservice : EleveService){}

 ngOnInit() {
  this.eleveservice.getEleves().subscribe(
    (response) => {
      console.log(response);
    }
  )
}


}
