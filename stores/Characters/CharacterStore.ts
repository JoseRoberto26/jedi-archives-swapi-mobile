import { observable, action } from 'mobx';
import { createContext } from 'react';
import { Character } from '../../utils/models/Character';
import BaseStore from '../BaseStore';

export interface ICharacterStore { 
    characters: Character[];
    //favoriteCharacters: Character[];
}

export class CharacterStore extends BaseStore implements ICharacterStore { 


    PEOPLE_PATH = `${this.BASE_URL}people`


    @observable characters;
    @observable selectedCharacter = new Character();
    @observable favoriteCharacters = new Array<Character>();

    @action
    selectCharacter = (character: Character) => { 
        this.selectedCharacter = character;
    }

    @action
    setFavorite = (character: Character) => { 
        this.favoriteCharacters.includes(character) ? 
        this.favoriteCharacters.splice(this.favoriteCharacters.indexOf(character), 1) : 
        this.favoriteCharacters.push(character);
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