import {IMovie} from "./IMovie";

export interface IMoviesByGenreService {
    results: IMovie[];
    page: number;
}