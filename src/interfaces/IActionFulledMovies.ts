import {IMovie} from "./IMovie";
import {IGenre} from "./IGenre";
import {IData} from "./IData";

export interface IActionFulledMovies {
    movie: IMovie[],
    genre: IGenre[],
    data: IData;
}