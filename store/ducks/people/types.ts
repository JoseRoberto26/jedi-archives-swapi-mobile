export enum PeopleTypes {
    LOAD_REQUEST = '@people/LOAD_REQUEST',
    LOAD_SUCCESS = '@people/LOAD_SUCCESS',
    LOAD_FAILURE = '@people/LOAD_FAILURE'
}

export interface Person { 
    name: string;
    img: string;
    id: number;
    height: number;
    mass: number;
    birth_year: string;
    homeworld?: string;
    films?: string[];
    hair_color?: string;
    skin_color?: string; 
    eye_color?: string;
    gender?: string;
    species?: string[];
}

export interface PersonState { 
    readonly data: Person[];
    readonly loading: boolean;
    readonly error: boolean;
}