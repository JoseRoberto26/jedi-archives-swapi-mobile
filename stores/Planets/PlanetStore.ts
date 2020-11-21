import Axios from 'axios';
import { observable, action } from 'mobx';
import { createContext } from 'react';
import { Planet } from '../../utils/models/Planet';
import BaseStore from '../BaseStore';

export interface IPlanetStore { 
    planet: Planet;
}

export class PlanetStore extends BaseStore implements IPlanetStore { 


    PLANET_PATH = `${this.BASE_URL}planets/`

    @observable planet;

    @action
    async fetchPlanetInfo(id: number) { 
        try{ 
            this.loading = true;
            const response = await fetch(`${this.PLANET_PATH}${id}`);
            this.planet = await response.json();
        }
        catch(error) { 
            console.log(error.message)
        } finally{
            this.loading = false
        }
    }
}

export const PlanetStoreContext = createContext(new PlanetStore())