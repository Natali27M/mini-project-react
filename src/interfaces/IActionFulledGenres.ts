import {IMovie} from "./IMovie";
import {IData} from "./IData";

export interface IActionFulledGenres{
    moviesByGenre: IMovie[];
    data: IData;
}