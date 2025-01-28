import {contentInterface} from "./contentInterface";
import {PROJETS, PERSO} from "./mock-projets";

export const CONTENT: contentInterface[] = [
    {
        id: "pro",
        content:{
            titleRightSide: "Mes expériences",
            cardList: PROJETS,
            firstTitleLeftSection: "Présentation",
            presentation: "Le développement est quelque chose que j'ai commencé à apprendre dès le collège. Cependant j'ai principalement appris à l'IUT lors de mon parcours en BUT Informatique. Aujourd'hui en 3ème année, je prends beaucoup de plaisir à réaliser des interfaces web. Vous trouverez ici un résumé de ce qui se rapporte à l'informatique dans ma vie.",
            secondTitleLeftSection: "Mes connaissances",
            subTitleLeftSection1: "Les plus utilisées",
            subTitleLeftSection2: "Déjà utilisées dans des projets",
            firstSubSection:{
                type: "images",
                list : ["Angular","JavaScript", "html", "css"],
            },
            secondSubSection:{
                type: "images",
                list : ["Docker", "CPP", "python", "java", "postgresql", "mongodb", "nodejs", "PHP", "git"],
            }
        }
    }
]