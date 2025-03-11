import {ProjectInterface} from "./projetInterface";

export const PROJETS: ProjectInterface[] = [
    {
        name: "Prologin",
        link: "https://prologin.org/",
        image: {
            image:'Prologin',
            source: "https://www.facebook.com/stagegirlscancode/",
            afficher: "GirlsCanCode",
        },
        description:"L'association Prologin permet de faire découvrir l'informatique aux plus jeunes. J'ai l'occasion d'intervenir lors des Girls Can Code qui " +
            " sont des week-ends de découverte pour les filles de la sixièmes à la terminale.",
        intitule: "Infos complémentaires",
        complement: {
            type: "text",
            list: ["L'association propose également un concours national qui existe déjà depuis 1991."]
        },
        status : null,
    },
    {
        name: "Stage STMicroelectronics",
        link: null,
        image: {
            image:"stmicroelectronics",
            source: null,
            afficher: null,
        },
        description :"L'objectif de ce stage était de réaliser un site SharePoint pour une équipe. J'ai également pu manipuler " +
            "d'autres outils de la suite Microsoft comme Power BI ou Power Automate.",
        intitule: "Infos complémentaires",
        complement:{
            type: "text",
            list: ["Ce stage s'est déroulé sur le site de Crolles mais l'équipe était également présente à Édimbourg, ce qui nécessitait de communiquer " +
            "régulèrement en anglais."]
        },
        status : null,
    },
    {
        name: "Soutien +",
        link: null,
        image: {
            image:"soutien",
            source: null,
            afficher: null,
        },
        description :"Dans le cadre de ma 3e année de BUT Informatique, nous devons réalisé en équipe de 7 une " +
            "application collaborative facilitant la gestion des personnes agées par des aidants, personnel médicaux etc... ",
        intitule: "Connaissances mises à profit",
        complement:{
            type: "img",
            list: ["Angular", "SpringBoot"]
        },
        status : "en cours",
    }
]

export const PERSO: ProjectInterface[] = [
    {
        name: "Animation 2D",
        link: null,
        image:{
            image:"Live2D",
            source: null,
            afficher: null,
        },
        description :"Habitué au dessin et à la création d'émoticônes statiques pour Twitch/Discord, j'ai commencé à m'interesser à l'animation 2D." +
            " L'animation image par image étant très longue, je tente de m'habituer à utiliser le logiciel Live2D.",
        intitule :"Bon à savoir",
        complement:{
            type: "text",
            list: ["Les modèles de vtuber étant cher, j'ai également commencé à me pencher sur live2D pour me réaliser mon propre modèle."]
        },
        status : null,
    },
    {
        name:"Twitch",
        link: "https://www.twitch.tv/anna_annakie",
        image:{
            image:"Twitch",
            source: null,
            afficher: null,
        },
        description: "Aimant créer et partager avec les autres, streamer sur Twitch reste quelque chose qui m'attire beaucoup. En plus des cours, " +
            "je travaille pour refaire mes scènes et finaliser mon modèle vtuber.",
        intitule:"Bon à savoir",
        complement:{
            type:"text",
            list:["Je suis habitué à Twitch et les outils qui l'entourent à force d'aider des amis qui stream. De plus j'ai déjà streamé en 2023."],
        },
        status : null,
    }
]

export const PLACEHOLDER: ProjectInterface[] = [
    {
        name: "",
        link: null,
        image: {
            image: "placeholder",
            source: null,
            afficher: null,
        },
        description :"",
        intitule :"",
        complement:{
            type: "text",
            list: [""]
        },
        status : null,
    }
]