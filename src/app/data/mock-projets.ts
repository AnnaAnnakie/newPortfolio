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