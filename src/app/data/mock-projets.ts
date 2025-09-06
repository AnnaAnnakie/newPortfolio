import {ProjectInterface} from "./projetInterface";

export const PROJETS: ProjectInterface[] = [
    {
        name: "Stage CEA",
        infos: null,
        image: {
            image:'CEA',
            source: null,
            afficher: null,
        },
        description:"La mission de ce stage était de piloter un outil grâce à une application web." +
        " Cet outil se pilotait initialement grâce à une application Windows, il y avait donc un existant à migrer "+
        "en prenant en compte un usage en réseau local.",
        intitule: "Infos complémentaires",
        complement: {
            type: "text",
            list: ["L'application a été développé en Django. Un serveur local intégré dans un Raspberry Pi permet d'avoir accès à "+
                "l'application depuis un téléphone personnel pour piloter l'outil."
            ]
        },
        status : null,
    },        {
        name: "OutOfBounds4",
        infos: null,
        image: {
            image:'OutOfBounds',
            source: null,
            afficher: null,
        },
        description:"L'objectif était de réaliser un jeu en 4 jours et 4 nuits avec pour thème «Le merveilleux monde de l'IUT2». La seule contrainte" +
        " technique étant l'utilisation de la librairie pygame de Python.",
        intitule: "Gameplay",
        complement: {
            type: "text",
            list: ["Dans OutOfBounds 4, nous incarnons monsieur Blanchon, enseignant au département informatique." +
                " Le réseau informatique de l'IUT2 est infesté par des virus qui ont pris vie à cause des bugs des mauvais codes des étudiants."+
                " Pour sauver l'IUT2, monsieur Blanchon plonge donc dans le réseau pour affronter les virus."
            ]
        },
        status : null,
    },{
        name: "Prologin",
        infos: {
            link:"https://prologin.org/",
            intitule: "En savoir plus"
        },
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
        infos: null,
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
        infos: {
            link:"http://82.66.239.16/",
            intitule: "Voir l'application",
        },
        image: {
            image:"soutien",
            source: null,
            afficher: null,
        },
        description :"Dans le cadre de ma 3e année de BUT Informatique, nous devons réalisé en équipe de 7 une " +
            "application collaborative facilitant la gestion des personnes agées par des aidants, personnel médicaux etc... ",
        intitule: "Langages utilisés",
        complement:{
            type: "img",
            list: ["Angular", "SpringBoot"]
        },
        status : null,
    }
]

export const PERSO: ProjectInterface[] = [
    {
        name: "Animation 2D",
        infos: null,
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
        infos: {
            link: "https://www.twitch.tv/anna_annakie",
            intitule: "Voir la chaîne",
        },
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
        infos: null,
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