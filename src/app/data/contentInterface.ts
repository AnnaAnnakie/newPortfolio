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

    sectionsLeft: SubSectionLeft[] | null;
}

export interface SubSectionLeft {
    bigTitle: string | null;
    subTitleLeftSection: string | null;
    type: string | null;
    list: string[] | null;
}