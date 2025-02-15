import { Component } from '@angular/core';
import { CONTENT} from "../../data/mock-content";
import {NgFor, NgIf, NgStyle} from "@angular/common";
import {CarouselComponent} from "../carousel/carousel.component";

@Component({
  selector: 'app-tests',
  imports: [
    NgStyle,
    NgFor
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {
  sparkles: { top: number, left: number }[] = [];

  constructor() {
    this.generateSparkles(50); // Génère 50 points
  }

  generateSparkles(count: number) {
    for (let i = 0; i < count; i++) {
      this.sparkles.push({
        top: Math.random() * 100,
        left: Math.random() * 100
      });
    }
  }

}
