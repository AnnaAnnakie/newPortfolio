export interface ProjectInterface {
    name: string;
    image: string;
    description: string;
    link: string | null;
    intitule: string;
    complement: ComplementInterface;
}

export interface ComplementInterface {
    type: string;
    list: string[];
}