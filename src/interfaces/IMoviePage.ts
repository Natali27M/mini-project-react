import {IMovie} from "./IMovie";
import {IData} from "./IData";
import {IId} from "./IId";

export interface IMoviePage{
    moviesByGenre: IMovie[]
    genre_id:IId
    data:IData
    page: number;
}