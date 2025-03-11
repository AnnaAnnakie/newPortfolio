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
            sectionsLeft:[
                {
                    bigTitle: "Mes connaissances",
                    subTitleLeftSection: "Les plus utilisées",
                    type: "images",
                    path : "languages",
                    list: ["Angular","JavaScript", "HTML", "CSS", "SCSS"],
                },
                {
                    bigTitle: null,
                    subTitleLeftSection: "Déjà utilisées dans des projets",
                    type: "images",
                    path: "languages",
                    list : ["Docker", "Cpp", "Python", "Java", "PostgreSQL", "MongoDB", "NodeJS", "PHP", "Git"],
                }
            ]
        }
    },
    {
        id: "perso",
        content:{
            titleRightSide: "Mes activités personnelles",
            cardList: PERSO,

            firstTitleLeftSection: "Présentation",
            presentation: "Anaïs, 21 ans, étudiante en 3e année de BUT Informatique. Bon c'est" +
                " pas le genre d'informations qu'on cherche à avoir dans cette section." +
                " Ici vous pouvez découvrir ce qui me tient à coeur et ce que je fais de" +
                " mon temps personnel, qui est rarement consacré à l'informatique. ",
            sectionsLeft: null,
        }
    }
]