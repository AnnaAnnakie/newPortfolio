export interface ProjectInterface {
    name: string;
    image: sourcesImages;
    description: string;
    link: string | null;
    intitule: string;
    complement: ComplementInterface;
    status : string | null;
}

export interface ComplementInterface {
    type: string;
    list: string[];
}

export interface sourcesImages {
    image: string;
    source: string | null;
    afficher: string | null;
}