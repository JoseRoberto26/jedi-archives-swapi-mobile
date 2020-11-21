import { Film } from "../models/Film";

export const completeFilmName = (film: Film) => { 
    return `Star Wars Episode ${film.episode_id}: ${film.title}`;
}