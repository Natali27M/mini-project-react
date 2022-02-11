import {IMovie} from "./IMovie";
import {IData} from "./IData";

export interface IMovieByGenre{
    moviesByGenre: IMovie[];
    data: IData;
    status: null | string;
    error: null | string;
}