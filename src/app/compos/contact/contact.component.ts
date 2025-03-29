import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contact',
  imports: [
    RouterLink,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mail: string = '';
  message: string = '';
  regex: RegExp = /^[\w.-]+@([\w-]+\.)+[\w-]+$/;

  updateMail(event: Event): void {
    this.mail = (event.target as HTMLInputElement).value;
  }

  updateMessage(event: Event): void {
    this.message = (event.target as HTMLTextAreaElement).value;
  }

  isValid(): boolean {
    return !(this.message.trim().length > 0 && this.regex.test(this.mail));
  }
}
