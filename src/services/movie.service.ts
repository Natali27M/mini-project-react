import {axiosService} from "./axios.service";
import {urlsMovie} from "../configs/urls";
import {IGetAllMovieService, IMovieGenreData} from "../interfaces";

export const movieService={
    getAll: (page:number) => axiosService.get<IMovieGenreData>(urlsMovie.movie,{params:{page}})
}