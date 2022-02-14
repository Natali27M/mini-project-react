import {IMovie} from "./IMovie";
import {IData} from "./IData";

export interface IMoviesByGenreService {
    results: IMovie[];
    page: number;
    genre_id: number;
    data: IData;
}