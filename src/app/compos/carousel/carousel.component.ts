import {Component, Input} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-carousel',
  imports: [
    CardComponent,
      NgFor,
      NgIf
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() cardList: any;
  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.cardList.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.cardList.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
