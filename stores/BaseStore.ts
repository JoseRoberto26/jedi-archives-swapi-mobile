import { observable } from 'mobx';

export default class BaseStore{ 

    BASE_URL = 'https://swapi.dev/api/';


    @observable loading = false;
} 