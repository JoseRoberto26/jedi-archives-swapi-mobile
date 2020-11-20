export interface Character { 
    name: string;
    img: string;
    id: number;
    height: number;
    mass: number;
    birth_year: string;
    homeworld?: string;
    films?: string[];
}