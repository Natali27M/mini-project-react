import {IMovie} from "./IMovie";
import {IGenre} from "./IGenre";
import {IData} from "./IData";

export interface IGetAllMovieService {
    params: number;
//     movies: IMovie[];
//     genres: IGenre[];
//     data: IData;
//     page: number;
    results: IMovie[];
// payload:number

}