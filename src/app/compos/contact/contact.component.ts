import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  message: string = '';
  mail: string = '';

  regex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]+$');

  isValid(){
    return !(this.message && this.regex.test(this.mail));
  }
}
