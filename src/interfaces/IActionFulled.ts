import {IMovie} from "./IMovie";
import {IGenre} from "./IGenre";
import {IData} from "./IData";

export interface IActionFulled{
    movie: IMovie[],
    genre: IGenre[],
    data: IData;
}