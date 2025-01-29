import { Component } from '@angular/core';
import { CONTENT} from "../../data/mock-content";
import {NgIf} from "@angular/common";
import {CarouselComponent} from "../carousel/carousel.component";

@Component({
  selector: 'app-tests',
  imports: [
    NgIf,
    CarouselComponent
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {
  contents = CONTENT[0];

}
