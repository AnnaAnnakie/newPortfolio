import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MarkbookComponent} from "./compos/markbook/markbook.component";
import {AccueilComponent} from "./compos/accueil/accueil.component";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MarkbookComponent, NgForOf, NgStyle, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
  sparkles: { top: number, left: number, animationDuration: string, animationDelay: string }[] = [];

  constructor() {
    this.generateSparkles(50); // Génère 50 points
  }

  generateSparkles(count: number) {
    for (let i = 0; i < count; i++) {
      this.sparkles.push({
        top: Math.random() * 100, // Position verticale aléatoire
        left: Math.random() * 100, // Position horizontale aléatoire
        animationDuration: `${Math.random() * 4 + 3}s`, // Durée entre 3 et 7 secondes
        animationDelay: `${Math.random() * 2}s`, // Délai entre 0 et 2 secondes
      });
    }
  }
}
