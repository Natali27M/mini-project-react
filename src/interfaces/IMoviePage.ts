import {IMovie} from "./IMovie";

export interface IMoviePage{
    moviesByGenre: IMovie[];
    page: number;
}