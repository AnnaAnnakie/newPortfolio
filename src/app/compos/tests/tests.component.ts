import { Component } from '@angular/core';
import { CONTENT} from "../../data/mock-content";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-tests',
  imports: [
      NgIf
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {
  test = CONTENT;
  content = this.test.find(item => item.id === "pro") || { id: '', content: { titleRightSide: '' } };
}
