import {IMovie} from "./IMovie";
import {IGenre} from "./IGenre";
import {IData} from "./IData";

export interface IStateMovie {
    movies: IMovie[];
    genres: IGenre[];
    data: IData;
    status: string | null;
    error: string | null;
    movieDetails: IMovie;
}

