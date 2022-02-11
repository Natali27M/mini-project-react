import {axiosService} from "./axios.service";
import {urlsMovie} from "../configs/urls";
import {IMovieGenreData} from "../interfaces";

export const movieService={
    getAll: (page:number) => axiosService.get<IMovieGenreData>(urlsMovie.movie,{params:{page}})
}