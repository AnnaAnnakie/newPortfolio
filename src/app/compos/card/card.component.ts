import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-card',
    imports: [
        NgIf,
        NgForOf,
        NgClass
    ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() projet: any;
    isFinished = false;

  ngOnInit() {
      console.log(this.projet.status);
      this.isFinished = this.projet.status !== 'En cours';
  }
}
