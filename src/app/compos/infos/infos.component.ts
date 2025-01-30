import {Component, OnInit} from '@angular/core';
import {ActivatedRoute  } from "@angular/router";
import {NgFor, NgIf} from "@angular/common";
import {CardComponent} from "../card/card.component";
import { CONTENT} from "../../data/mock-content";
import {PLACEHOLDER} from "../../data/mock-projets";
import {CarouselComponent} from "../carousel/carousel.component";
import {contentInterface} from "../../data/contentInterface";

@Component({
  selector: 'app-infos',
  imports: [
    NgFor,
    NgIf,
    CardComponent,
  ],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss'
})
export class InfosComponent implements OnInit {
  type: string | null =null;
  constructor(
      private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.setContent();
  }

  getType(){
    return (this.route.snapshot.paramMap.get('type'));
  }
  setContent(){
    this.contents = CONTENT.find(item => item.id === this.getType()) || this.contents;
  }

  contents: contentInterface = {
    id: "",
    content:{
      titleRightSide: "",
      cardList: PLACEHOLDER,

      firstTitleLeftSection: "",
      presentation: "",
      sectionsLeft: null,
    }
  };
}
