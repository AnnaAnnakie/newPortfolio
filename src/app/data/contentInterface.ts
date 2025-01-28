import {ProjectInterface} from "./projetInterface";

export interface contentInterface {
    id: string;
    content: contentsInterface;
}

export interface contentsInterface {
    titleRightSide: string;
    cardList: ProjectInterface[];

    firstTitleLeftSection: string;
    presentation: string;
    secondTitleLeftSection: string;
    subTitleLeftSection1: string;
    firstSubSection: firstSubSectionLeft;
    subTitleLeftSection2: string;
    secondSubSection: secondSubSectionLeft;
}

export interface firstSubSectionLeft {
    type: string;
    list: string[];
}
export interface secondSubSectionLeft {
    type: string;
    list: string[];
}