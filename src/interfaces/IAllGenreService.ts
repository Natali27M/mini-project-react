import {IMovie} from "./IMovie";

export interface IAllGenreService {
    results: IMovie[];
    genre_id: number;
    page: number;
}