import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {PROJETS} from "../../data/mock-projets";
import {NgFor, NgIf} from "@angular/common";
import {CardComponent} from "../card/card.component";
import {FAVCOMPS, GLOBALCOMPS} from "../../data/mock-comp";

@Component({
  selector: 'app-infos',
  imports: [
    RouterLink,
    NgFor,
    NgIf,
    CardComponent
  ],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss'
})
export class InfosComponent {
  projets = PROJETS;
  favComp = FAVCOMPS;
  globalComp = GLOBALCOMPS;
}
