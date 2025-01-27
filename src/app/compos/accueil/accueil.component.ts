import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {WInProgressComponent} from "../w-in-progress/w-in-progress.component";

@Component({
  selector: 'app-accueil',
    imports: [
        RouterLink,
        WInProgressComponent
    ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  infopro(){

  }

}
