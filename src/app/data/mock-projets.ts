import {ProjectInterface} from "./projetInterface";

export const PROJETS: ProjectInterface[] = [
    {
        name: "Prologin",
        link: "https://prologin.org/",
        image: 'Prologin',
        description:"L'association Prologin permet de faire découvrir l'informatique aux plus jeunes. J'ai l'occasion d'intervenir lors des Girls Can Code qui " +
            " sont des week-ends de découverte pour les filles de la sixièmes à la terminale.",
        intitule: "Infos complémentaires",
        complement: {
            type: "text",
            list: ["L'association propose également un concours national qui existe déjà depuis 1991."]
        }
    },
    {
        name: "Stage STMicroelectronics",
        link: null,
        image: "stmicroelectronics",
        description :"L'objectif de ce stage était de réaliser un site SharePoint pour une équipe. J'ai également pu manipuler " +
            "d'autres outils de la suite Microsoft comme Power BI ou Power Automate.",
        intitule: "Infos complémentaires",
        complement:{
            type: "text",
            list: ["Ce stage s'est déroulé sur le site de Crolles mais l'équipe était également présente à Édimbourg, ce qui nécessitait de communiquer " +
            "régulèrement en anglais."]
        }
    }
]

export const PERSO: ProjectInterface[] = [
    {
        name: "Animation 2D",
        link: null,
        image: "Live2D",
        description :"Habitué au dessin et à la création d'emoticons statiques pour Twitch/Discord, j'ai commencé à m'interesser à l'animation 2D." +
            " L'animation image par image étant très longue, je tente de m'habituer à utiliser le logiciel Live2D.",
        intitule :"Bon à savoir",
        complement:{
            type: "text",
            list: ["Les modèles de vtuber étant cher, j'ai également commencé à me pencher sur live2D pour me réaliser mon propre modèle."]
        }
    },
    {
        name:"Twitch",
        link: "https://www.twitch.tv/anna_annakie",
        image: "Twitch",
        description: "Aimant créer et partager avec les autres, streamer sur Twitch reste quelque chose qui m'attire beaucoup. En plus des cours, " +
            "je travaille pour refaire mes scènes et finaliser mon modèle vtuber.",
        intitule:"Bon à savoir",
        complement:{
            type:"text",
            list:["Je suis habitué à Twitch et les outils qui entourent à force d'aider des amis qui stream. De plus j'ai déjà streamé en 2023."],
        }
    }
]

export const PLACEHOLDER: ProjectInterface[] = [
    {
        name: "",
        link: null,
        image: "placeholder",
        description :"",
        intitule :"",
        complement:{
            type: "text",
            list: [""]
        }
    }
]