import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-markbook',
    imports: [
        RouterLink
    ],
  templateUrl: './markbook.component.html',
  styleUrl: './markbook.component.scss'
})
export class MarkbookComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
