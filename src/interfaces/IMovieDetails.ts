import {IGenre} from "./IGenre";

export interface IMovieDetails {
    id:number;
    original_title: string;
    poster_path: string;
    vote_average: number;
    release_date: number;
    overview: string;
    genres: IGenre;
}