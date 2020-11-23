import { observable, action } from 'mobx';
import { createContext } from 'react';
import { ImageObject } from '../../utils/models/ImageObject';
import BaseStore from '../BaseStore';

export interface ImageStoreProps {
    images: ImageObject[]
}

export class ImageStore extends BaseStore implements ImageStoreProps{ 

    API_KEY = 'AIzaSyBf-6xWVdGT2ObvrVuVBLxvkClkdzy9zs0'
    SEARCH_URL = `https://www.googleapis.com/customsearch/v1?key=${this.API_KEY}&cx=015504602976033325475:fqoyxqbmz5y&q=`


    @observable images = new Array<ImageObject>();

    @action
    emptyImages = () => { 
        this.images = [ ]
    }

    @action
    async fetchImages(query: string) { 
        try {
            let responseJson;
            this.loading = true
            const response = await fetch(`${this.SEARCH_URL}${query}&searchType=image`)
            responseJson = await response.json();
            this.images.push({
                name: query, 
                images: responseJson.items
            })
        } catch (error) {
            console.log(error)
        }
        finally{
            this.loading = false;
        }
    }
}

export const ImageStoreContext = createContext(new ImageStore())