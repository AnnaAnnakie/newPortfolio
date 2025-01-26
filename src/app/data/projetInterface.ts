export interface ProjectInterface {
    name: string;
    image: string;
    description: string;
    link: string | null;
    complément: ComplementInterface;
}

export interface ComplementInterface {
    type: string;
    list: string[];
}