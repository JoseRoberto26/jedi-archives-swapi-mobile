import { createContext } from 'react';
import { Species } from '../utils/models/Specie';
import { CharacterStore } from './Characters/CharacterStore';
import { FilmStore } from './Films/FilmStore';
import { PlanetStore } from './Planets/PlanetStore';
import { ImageStore } from './ProfileImages/ImageStore';
import { SpeciesStore } from './Species/SpeciesStore';

export default class RootStores { 
    charactersStore: CharacterStore = new CharacterStore();
    planetStore: PlanetStore = new PlanetStore();
    speciesStore: SpeciesStore = new SpeciesStore();
    filmStore: FilmStore = new FilmStore();
    imageStore: ImageStore = new ImageStore();
}


export const RootStoresContext = createContext(new RootStores())