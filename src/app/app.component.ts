import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MarkbookComponent} from "./compos/markbook/markbook.component";
import {AccueilComponent} from "./compos/accueil/accueil.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MarkbookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
