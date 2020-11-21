import { createContext } from 'react';
import { CharacterStore } from './Characters/CharacterStore';
import { PlanetStore } from './Planets/PlanetStore';

class RootStores { 
    charactersStore: CharacterStore = new CharacterStore();
    planetStore: PlanetStore = new PlanetStore();
}


export const RootStoresContext = createContext(new RootStores())