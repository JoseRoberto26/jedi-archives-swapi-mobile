import { observable, action } from 'mobx';
import {createContext} from 'react';
import { Film } from '../../utils/models/Film';
import BaseStore from '../BaseStore';


export interface IFilmStore { 
    films: Film[];
}

export class FilmStore extends BaseStore implements IFilmStore {
     
    FILM_PATH = `${this.BASE_URL}films/`;

    @observable films;

    @action
    async fetchFilmsAsync () {
        try{
            this.loading = true;
            const response = await fetch(`${this.FILM_PATH}`)
            this.films = await response.json();
            this.films = this.films.results;
        }
        catch(error){
            console.log(error.message)
        }
        finally{
            this.loading = false;
        }
    }
}

export const FilmStoreContext = createContext(new FilmStore());