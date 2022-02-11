import {IMovie} from "./IMovie";
import {IGenre} from "./IGenre";
import {IData} from "./IData";

export interface IMovieGenreData{
    movies: IMovie[],
    genres: IGenre[],
    data: IData;
    page: number;
    results: IMovie[];
}