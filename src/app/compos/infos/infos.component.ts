import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {PROJETS, PERSO} from "../../data/mock-projets";
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
  constructor(
      private route: ActivatedRoute
  ){}
  ngOnInit() {
    this.setupParType();
  }
  contents = PROJETS;
  favComp = FAVCOMPS;
  globalComp = GLOBALCOMPS;
  getType(){
    return (this.route.snapshot.paramMap.get('type'));
  }

  setupParType(){
    if( this.getType() == "pro"){
      this.contents = PROJETS;
      this.favComp = FAVCOMPS;
      this.globalComp = GLOBALCOMPS;
    }else{
      this.contents = PERSO;
      this.favComp = [];
      this.globalComp = [];
    }
  }
}
