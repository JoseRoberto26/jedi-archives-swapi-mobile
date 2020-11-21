import Axios from 'axios';
import { observable, action } from 'mobx';
import { createContext } from 'react';
import { Character } from '../../utils/models/Character';
import BaseStore from '../BaseStore';

export interface ICharacterStore { 
    characters: Character[];
}

export class CharacterStore extends BaseStore implements ICharacterStore { 


    PEOPLE_PATH = `${this.BASE_URL}people`


    @observable characters;
    @observable selectedCharacter = new Character();

    @action
    selectCharacter = (character: Character) => { 
        this.selectedCharacter = character;
    }

    @action
    async fetchCharactersAsync(page: number) { 
        try{ 
            this.loading = true;
            const response = await fetch(`${this.PEOPLE_PATH}/?page=${page}`);
            this.characters = await response.json();
        }
        catch(error) { 
            console.log(error.message)
        } finally{
            this.loading = false
        }
    }
}

export const CharacterStoreContext = createContext(new CharacterStore())