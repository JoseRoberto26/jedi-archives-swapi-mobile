import Axios from 'axios';
import { observable, action } from 'mobx';
import { createContext } from 'react';
import { Planet } from '../../utils/models/Planet';
import { Species } from '../../utils/models/Specie';
import BaseStore from '../BaseStore';

export interface ISpeciesStore { 
    species: Species;
}

export class SpeciesStore extends BaseStore implements ISpeciesStore { 


    SPECIES_PATH = `${this.BASE_URL}species/`

    @observable species;

    @action
    async fetchSpeciesInfo(id: number) { 
        try{ 
            this.loading = true;
            const response = await fetch(`${this.SPECIES_PATH}${id}`);
            this.species = await response.json();
        }
        catch(error) { 
            console.log(error.message)
        } finally{
            this.loading = false
        }
    }
}

export const SpeciesStoreContext = createContext(new SpeciesStore())