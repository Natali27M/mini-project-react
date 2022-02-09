import {IGenre} from "./IGenre";

export interface IMovie{
    id?:number;
    original_title: string;
    poster_path: string;
    vote_average: number;
    release_date: number;
    overview: string;
    genre_ids: IGenre[];
}