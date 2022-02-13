import {IMovie} from "./IMovie";

export interface IGetAllMovieService {
    params: number;
    results: IMovie[];
}